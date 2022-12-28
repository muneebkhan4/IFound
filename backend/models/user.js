const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
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
  userType: {
    type: String,
  },
});
// basically its a key value pair generateAuthToken become name of the function (act as key)
// and its value is the function
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, userType: this.userType },
    config.get("JwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(150).required(),
    email: Joi.string().min(5).max(150).required().email(),
    password: Joi.string().min(5).max(150).required(),
    userType: Joi.string(),
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
