const config = require("config");
const mongoose = require("mongoose");
const _ = require("lodash");
const express = require("express");
cors = require("cors");
const user = require("./routers/user");
const auth = require("./routers/auth");
const publishPersonPost = require("./routers/publishPersonPost");
const publishThingPost = require("./routers/publishThingPost");
const getPosts = require("./routers/getPosts");
const getThingPosts = require("./routers/getThingPosts");
const verifyToken = require("./routers/verifyToken");
const jwt = require("jsonwebtoken");
const app = express();
const { Image } = require("./models/image");
app.use(express.static("uploads")); // make upload folder publically available
app.use(cors()); // sop (same origin policy, rejects api requets to other websites, so cross origin resource share allow us to do it safely)
const corsOptions = {
  exposedHeaders: "x_auth_token", // very important to expose token, in order to be visible and used after API response
};
app.use(cors(corsOptions));

// parse application/json
app.use(express.json());

// checking JWT Private Key
if (!config.get("JwtPrivateKey")) {
  console.log("FATAL ERROR: JwtPrivateKey is not defined!"); // set by running "set IFound_JwtPrivateKey= MySecureKey"
  process.exit(1);
}

// connecting to database (MongoDB)
mongoose
  .connect("mongodb://localhost/IFound")
  .then(() => console.log("connection to mongo db successful..."))
  .catch((err) => (console.error("Error in connecting to mongo db..."), err));

// Routes
app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/publish-person-post", publishPersonPost);
app.use("/api/publish-thing-post", publishThingPost);
app.use("/api/get-posts", getPosts);
app.use("/api/getThingPosts", getThingPosts);
app.use("/verifyToken", verifyToken); // for differnt users dashboard validation

app.get("/image", async (req, res) => {
  let image = await Image.findOne({ _id: "638ca6955d202658b08e5387" });
  console.log(image.imgUrl);
  res.send(image.data.toString("base64"));
});

// Server Listening
const port = 1000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
