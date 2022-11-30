const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
  age: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  details: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 500,
  },
  file: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

function validatePost(Post) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(150).required(),
    age: Joi.string().required(),
    city: Joi.string().min(5).max(50).required(),
    details: Joi.string().min(5).max(500).required(),
    //file: Joi.string().required(),
  });
  return schema.validate(Post);
}

exports.Post = Post;
exports.validate = validatePost;
