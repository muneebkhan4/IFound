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

  let posts = await PersonPost.find();
  let images = [];
  for (let i = 0; i < posts.length; i++) {
    let x = await Image.findById(posts[i].imageId);
    images[i] = x.data;
  }
  let filtered = [];
  let i = 0;
  posts.forEach((x) => [
    filtered.push(
      _.pick(x, ["name", "age", "city", "details", "postType", "date"]),
      { data: images[i++] }
    ),
  ]);

  // filtered contains "name", "age", "city", "details", "postType", "date" "data:{}"

  return res.status(200).send(filtered);
});

module.exports = router;
