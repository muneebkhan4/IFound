const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Image } = require("../models/image");
const { Post, validate } = require("../models/post");

const auth = require("../middleware/auth");

const upload = require("../middleware/upload");
//app.use(express.static("uploads"));

// add auth middle ware for seucrity and token validation check
router.post("/", upload.single("file"), async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (req.file === undefined) return res.send("you must select an image.");

  const imgUrl = `http://localhost:1000/${req.file.filename}`;
  let post = new Post(_.pick(req.body, ["name", "age", "city", "details"])); // handled the case if malicious user try to request more arguments
  post.file = imgUrl;

  await post.save();
  return res.status(400).send("saved");
});

module.exports = router;