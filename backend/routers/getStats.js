const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");
const { Image } = require("../models/image");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.get("/", auth, async (req, res) => {
  const currentUserId = req.user._id;
  let posts = await PostThing.find();
  let missing = await PostThing.find({ postType: "MissingThing" });
  let found = await PostThing.find({ postType: "FoundThing" });
  const stats = [
    {
      totalPosts: posts.length,
      TotalLostPosts: missing.length,
      TotalFoundPosts: found.length,
      TotalResolvedPostsByAllUsers: 2,
      TotalUnResolvedPostsByAllUsers: 5,
    },
  ];

  return res.status(200).send(stats);
});

module.exports = router;

//   User Statistics:
//   -UserLostPosts:
//   -UserFoundPosts:
//   -UserResolvedPosts
//   -UserUnResolvedPosts
