const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");
const { Image } = require("../models/image");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.get("/", auth, async (req, res) => {
  const currentPost = req.query.post;

  //console.log(currentPost);

  let posts;

  if (currentPost.postType == "FoundThing")
    posts = await PostThing.find({ postType: "MissingThing" }); // all thing posts
  if (currentPost.postType == "MissingThing")
    posts = await PostThing.find({ postType: "FoundThing" }); // all thing posts

  let rankedList = rankObjects(currentPost, posts);

  let images = [];

  for (let i = 0; i < rankedList.length; i++) {
    let image = await Image.findById(rankedList[i].imageId);
    if (image) images.push(image.data.toString("base64"));
  }

  // make an algorithm that takes an object and list of objects as input where object have "name", "category", "color", "city", "details", "phone", "address", "date" as attribute and return a ranked list depending on the match with object on "name", "category", "color", "city", "details", "phone", "address", "date" attributes
  if (rankedList.length > 0) return res.status(200).send([rankedList, images]);
  else return res.status(200).send("");
});

module.exports = router;

function rankObjects(queryObj, objectsList) {
  const rankedObjects = [];

  // Loop through each object in the list
  for (const obj of objectsList) {
    let score = 0;

    // Check for a match on each attribute
    if (queryObj.name === obj.name) {
      score += 1;
    }
    if (queryObj.category === obj.category) {
      score += 1;
    }
    if (queryObj.color === obj.color) {
      score += 1;
    }
    if (queryObj.city === obj.city) {
      score += 1;
    }
    if (queryObj.details === obj.details) {
      score += 1;
    }
    if (queryObj.phone === obj.phone) {
      score += 1;
    }
    if (queryObj.address === obj.address) {
      score += 1;
    }
    if (queryObj.date === obj.date) {
      score += 1;
    }

    // Add the object and its score to the ranked objects list
    rankedObjects.push({ object: obj, score: score });
  }

  // Sort the ranked objects list by score (descending order)
  rankedObjects.sort((a, b) => b.score - a.score);

  // Return an array of just the objects (not including their scores)
  return rankedObjects.map((rankedObj) => rankedObj.object);
}
