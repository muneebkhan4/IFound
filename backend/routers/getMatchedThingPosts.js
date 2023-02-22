const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");
const { Image } = require("../models/image");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.get("/", auth, async (req, res) => {
  let posts = await PostThing.find({ postType: "FoundThing" }); // all thing posts

  let filtered = [];
  let images = [];

  for (let i = 0; i < posts.length; i++) {
    let x = await Image.findById(posts[i].imageId);
    if (x) images[i] = x.data.toString("base64");
    // getting actual data only and converting it ot base64
    else images[i] = null;
  }
  let i = 0;
  posts.forEach((x) => {
    let obj = _.pick(x, [
      "name",
      "category",
      "color",
      "city",
      "details",
      "phone",
      "address",
      "date",
      "postType",
    ]);
    filtered.push({ data: obj, image: images[i++] });
  });

  // filtered contains {data{"name", "age", "city", "details", "postType", "date"},"image:{}"}

  return res.status(200).send(filtered);
});

module.exports = router;
