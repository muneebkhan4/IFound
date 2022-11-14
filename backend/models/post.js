const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const postSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
});
// basically its a key value pair generateAuthToken become name of the function (act as key)
// and its value is the function
postSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, config.get("JwtPrivateKey"));
};

const Post = mongoose.model("Post", postSchema);

function validatePost(Post) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(150).required(),
    email: Joi.string().min(5).max(150).required().email(),
    password: Joi.string().min(5).max(150).required(),
  });
  return schema.validate(Post);
}

exports.Post = Post;
exports.validate = validatePost;
