const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const { Image } = require("./image");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  details: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 500,
  },
  postType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
  },
});

const PostThing = mongoose.model("PostThing", postSchema);

function validatePost(PostThing) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(150).required(),
    category: Joi.string().required(),
    color: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(50).required(),
    details: Joi.string().min(5).max(500).required(),
    postType: Joi.string().required(),
    //userId: Joi.string().required(),
    //imageId: Joi.string().required(),
  });
  return schema.validate(PostThing);
}

exports.PostThing = PostThing;
exports.validate = validatePost;
