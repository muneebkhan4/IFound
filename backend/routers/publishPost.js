const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Image } = require("../models/image");
const { Post, validate } = require("../models/post");
const fs = require("fs");

const auth = require("../middleware/auth");

const upload = require("../middleware/upload");

// add auth middle ware for seucrity and token validation check
router.post("/", [auth, upload.single("file")], async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (req.file === undefined) return res.send("you must select an image.");

  const Url = `http://localhost:1000/${req.file.filename}`;
  let post = new Post(
    _.pick(req.body, ["name", "age", "city", "details", "postType"])
  ); // handled the case if malicious user try to request more arguments

  post.date = new Date();

  const image = new Image({
    imgUrl: Url,
  });

  image.data = fs.readFileSync(`./uploads/${req.file.filename}`);

  const temp = await image.save();

  if (Image.findOne({ _id: temp._id })) post.imageId = temp._id;

  post.userId = req.user._id;

  await post.save();
  return res.status(200).send("saved");
});

module.exports = router;
