const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
cors = require("cors");
const user = require("./routers/user");
const auth = require("./routers/auth");
const publishPost = require("./routers/publishPost");
const getPosts = require("./routers/getPosts");
const app = express();

app.use(cors());
const port = 1000;

// upload image handling
const upload = require("./middleware/upload");

const { Image } = require("./models/image");

app.use(express.static("uploads"));
app.post("/post", upload.single("file"), async function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  let img = new Image();

  if (req.file === undefined) return res.send("you must select an image.");
  const imgUrl = `http://localhost:1000/post/${req.file.filename}`;

  img.imgUrl = imgUrl;

  await img.save();

  return res.send(imgUrl);
});

// http://localhost:1000/1667927440979-20210402_195757.jpg

if (!config.get("JwtPrivateKey")) {
  console.log("FATAL ERROR: JwtPrivateKey is not defined!"); // set by running "set IFound_JwtPrivateKey= MySecureKey"
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/IFound")
  .then(() => console.log("connection to mongo db successful..."))
  .catch((err) => (console.error("Error in connecting to mongo db..."), err));

// parse application/json
app.use(express.json());
app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/publish-post", publishPost);
app.use("/api/get-posts", getPosts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
