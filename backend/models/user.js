const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 150,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 150,
    },
  })
);

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(150).required().email(),
    password: Joi.string().min(5).max(150).required(),
  });
  return schema.validate(user);
}

function validatePassword(password) {
  const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 5, // number of requirments to be fulfiled
  };
  return passwordComplexity(complexityOptions, "password").validate(password);
}

exports.User = User;
exports.validate = validateUser;
exports.validatePassword = validatePassword;
