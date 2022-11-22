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
});

const Post = mongoose.model("Post", postSchema);

function validatePost(Post) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(150).required(),
  });
  return schema.validate(Post);
}

exports.Post = Post;
exports.validate = validatePost;
