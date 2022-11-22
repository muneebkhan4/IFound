const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Image } = require("../models/image");
const { Post, validate } = require("../models/post");

const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let post = new Post(_.pick(req.body, ["name"])); // handled the case if malicious user try to request more arguments

  await post.save();
  return res.status(400).send("saved");
});

module.exports = router;
