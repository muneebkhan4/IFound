const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Image } = require("../models/image");
const { PostThing, validate } = require("../models/thingPost");
const fs = require("fs");
const jwt_decode = require('jwt-decode');
const {User}=require('../models/user');
const auth = require("../middleware/auth");

const upload = require("../middleware/upload");

// add auth middle ware for seucrity and token validation check
router.post("/", [auth, upload.single("file")], async (req, res) => {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  
  const token= req.header("x_auth_token");
  var {_id} = jwt_decode(token);

  const { error } = validate(req.body);
  console.log("validation error",error);
  if (error) return res.status(400).send(error.details[0].message);

  console.log("_id ",_id);

  // image not compulsory
  // if (req.file === undefined) return res.send("you must select an image.");

  let post = new PostThing(
    _.pick(req.body, [
      "name",
      "category",
      "color",
      "city",
      "details",
      "postType",
    ])
  ); // handled the case if malicious user try to request more arguments

  post.date = new Date();
  post.userId=_id;
  console.log("post",post);
  post.imageId = null;

  if (req.file) {
    const Url = `http://localhost:1000/${req.file.filename}`;
    const image = new Image({
      imgUrl: Url,
    });
    image.data = fs.readFileSync(`./uploads/${req.file.filename}`);
    const temp = await image.save();
    if (Image.findOne({ _id: temp._id })) post.imageId = temp._id;
  }

  await post.save();

  return res.status(200).send("saved");
});

module.exports = router;
