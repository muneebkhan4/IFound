const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate, validatePassword } = require("../models/user");
const { Image } = require("../models/image");
const { PersonPost } = require("../models/personPost");

const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  const currentUserId = req.user._id;
  let posts = await PersonPost.find({ userId: currentUserId });
  let images = [];
  for (let i = 0; i < posts.length; i++) {
    let x = await Image.findById(posts[i].imageId);
    images[i] = x.data.toString("base64"); // getting actual data only and converting it ot base64
  }
  let filtered = [];
  let i = 0;
  posts.forEach((x) => {
    let obj = _.pick(x, ["name", "age", "city", "details", "postType", "date"]);
    filtered.push({ data: obj, image: images[i++] });
  });

  // filtered contains {data{"name", "age", "city", "details", "postType", "date"},"image:{}"}

  return res.status(200).send(filtered);
});

module.exports = router;
