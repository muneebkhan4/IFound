const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate, validatePassword } = require("../models/user");
const { Image } = require("../models/image");
const { Post } = require("../models/personPost");

const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  const posts = await Post.find();

  const result = [];
  for (let i = 0; i < posts.length; i++) {
    result.push(
      _.pick(posts[i], ["name", "age", "city", "details", "postType"])
    );
  }
  return res.status(200).send(result);
});

module.exports = router;
