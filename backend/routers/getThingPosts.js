const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.get("/", auth, async (req, res) => {
  const userId = req.user._id;
  let posts = await PostThing.findOne({ userId: userId });
  res
    .status(200)
    .send(
      _.pick(posts, ["name", "category", "color", "city", "details", "date"])
    );
});

module.exports = router;
