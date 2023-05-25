const config = require("config");
const mongoose = require("mongoose");
const _ = require("lodash");
const express = require("express");
cors = require("cors");
const user = require("./routers/user");
const auth = require("./routers/auth");
const publishPersonPost = require("./routers/publishPersonPost");
const publishThingPost = require("./routers/publishThingPost");
const getPersonPosts = require("./routers/getPersonPosts");
const getThingPosts = require("./routers/getThingPosts");
const getMatchedThingPosts = require("./routers/getMatchedThingPosts");
const allMissingPersonPosts = require("./routers/allMissingPersonPosts");
const allFoundPersonPosts = require("./routers/allFoundPersonPosts");
const allMissingThingPosts = require("./routers/allMissingThingPosts");
const allFoundThingPosts = require("./routers/allFoundThingPosts");
const verifyToken = require("./routers/verifyToken");
const jwt = require("jsonwebtoken");
const app = express();
const { Image } = require("./models/image");
const { User } = require("./models/user");

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

// const mongoose = require('mongoose')

// const url = `enter url here`;


// connecting to database (MongoDB)
mongoose
  .connect(url)
  // .connect("mongodb://localhost/IFound") // for deployment MongoDB Altas
  .then(() => console.log("connection to mongo db successful..."))
  .catch((err) => console.log("Error in connecting to mongo db...", err));

// Routes
app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/publish-person-post", publishPersonPost);
app.use("/api/publish-thing-post", publishThingPost);
app.use("/api/getPersonPosts", getPersonPosts);
app.use("/api/getThingPosts", getThingPosts);
app.use("/api/getMatchedThingPosts", getMatchedThingPosts);
app.use("/api/allMissingPersonPosts", allMissingPersonPosts);
app.use("/api/allFoundPersonPosts", allFoundPersonPosts);
app.use("/api/allMissingThingPosts", allMissingThingPosts);
app.use("/api/allFoundThingPosts", allFoundThingPosts);
app.use("/verifyToken", verifyToken); // for differnt users dashboard validation

app.get("/api/users/:id", async (req, res) => {
  const currentUserId = req.params;
  console.log(currentUserId);
  // const currentUserId = req.user.id;
  if (!currentUserId)
    return res
      .status(400)
      .send("Bad ReuqestError! UserId Provided Is Not Correct");
  // const user=new User();
  // console.log(await User.find());
  User.findById(currentUserId.id, function (err, user) {
    if (err) {
      return res
        .status(500)
        .send("Internal Server Error! UserId Provided Is Not Correct");
    } else {
      console.log(user);
      return res.status(200).send(user);
    }
  });
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
