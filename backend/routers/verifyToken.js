const express = require("express");
const router = express.Router();
const { PostThing } = require("../models/thingPost");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.post("/", auth, async (req, res) => {
  // console.log(req.user);
  console.log(req.user.userType);
  res.status(200).send("user");
});

module.exports = router;
