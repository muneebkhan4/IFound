const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const { Image } = require("./image");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
  age: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  details: {
    type: String,
    required: true,
    minlength: 2,
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
    required: true,
  },
});

const PersonPost = mongoose.model("PersonPost", postSchema);

function validatePost(PersonPost) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(150).required(),
    age: Joi.string().required(),
    city: Joi.string().min(2).max(50).required(),
    details: Joi.string().min(2).max(500).required(),
    postType: Joi.string().required(),
    //userId: Joi.string().required(),
    //imageId: Joi.string().required(),
  });
  return schema.validate(PersonPost);
}

exports.PersonPost = PersonPost;
exports.validate = validatePost;
