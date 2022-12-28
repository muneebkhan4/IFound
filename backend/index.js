const config = require("config");
const mongoose = require("mongoose");
const _ = require("lodash");
const express = require("express");
cors = require("cors");
const user = require("./routers/user");
const auth = require("./routers/auth");
const publishPost = require("./routers/publishPost");
const getPosts = require("./routers/getPosts");
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
app.use("/api/publish-missing-person-post", publishPost);
app.use("/api/get-posts", getPosts);

// for differnt users dashboard validation
app.post("/verifyToken", async (req, res) => {
  const token = req.header("x_auth_token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, config.get("JwtPrivateKey"));
    res.status(200).send(decoded.userType);
  } catch (ex) {
    res.status(400).send("Invalid Token.");
  }
});

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
