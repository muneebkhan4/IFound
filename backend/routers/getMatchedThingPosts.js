const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");
const { Image } = require("../models/image");

const auth = require("../middleware/auth");

function getSimilarityScore(text1, text2) {
  // Convert both texts to lowercase
  text1 = text1.toLowerCase();
  text2 = text2.toLowerCase();

  // Calculate the Levenshtein distance
  const distance = levenshteinDistance(text1, text2);

  // Calculate the similarity score as a value between 1 and 10
  const maxLength = Math.max(text1.length, text2.length);
  const similarityScore = Math.max(0, (maxLength - distance) / maxLength) * 10;

  return similarityScore.toFixed(2);
}

function levenshteinDistance(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Create a 2D matrix to store the distances
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Initialize the first row and column of the matrix
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  // Calculate the distances
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  // Return the distance between the two strings
  return dp[m][n];
}

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

  // make an algorithm that takes an object and list of objects as input where object have "name", "category", "color", "city", "details", "phone", "date" as attribute and return a ranked list depending on the match with object on "name", "category", "color", "city", "details", "phone", "address", "date" attributes
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
    score += getSimilarityScore(queryObj.details, obj.details);
    if (queryObj.phone === obj.phone) {
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
