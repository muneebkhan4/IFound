const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { PostThing } = require("../models/thingPost");
const { Image } = require("../models/image");

const auth = require("../middleware/auth");

// add auth middle ware for seucrity and token validation check

router.get("/", auth, async (req, res) => {
  const currentUserId = req.user._id;

  let posts = await PostThing.find(); // all thing posts
  let Fposts = await PostThing.find({ postType: "FoundThing" }); // all thing posts
  let Lposts = await PostThing.find({ postType: "MissingThing" }); // all thing posts
  let Uposts = await PostThing.find({ userId: currentUserId });

  // console.log("F:\n", Fposts);
  // console.log("L:\n", Lposts);
  // console.log("U:\n", Uposts);

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
  // make an algorithm that takes an object and a list of object as input where object have "name", "category", "color", "city", "details", "phone", "address", "date" as attribute and return a ranked list depending on the match with object on "name", "category", "color", "city", "details", "phone", "address", "date" attributes

  let result = rankList(posts[2], posts);
  result.forEach((x) => {
    console.log(
      x.score,
      x.obj.name,
      x.obj.category,
      x.obj.color,
      x.obj.city,
      x.obj.details,
      x.obj.phone,
      x.obj.address,
      x.obj.date
    );
  });

  // filtered contains {data{"name", "age", "city", "details", "postType", "date"},"image:{}"}

  return res.status(200).send(filtered);
});

module.exports = router;

function rankList(object, list) {
  let rankedList = [];

  let keys = [
    "name",
    "category",
    "color",
    "city",
    "address",
    "details",
    "date",
  ];

  // loop through the list of objects
  for (let i = 0; i < list.length; i++) {
    let score = 0;

    // loop through the attributes of each object
    for (let j in keys) {
      // if the attribute matches the given object, increase the score
      //console.log(keys[j]);
      //console.log(list[i][keys[j]]);
      if (list[i][keys[j]] === object[keys[j]]) {
        score++;
      }
    }

    // add the score and object to the ranked list array
    rankedList.push({ score: score, obj: list[i] });
  }

  // sort the array in descending order of scores and return it
  return rankedList.sort((a, b) => b.score - a.score);
}
