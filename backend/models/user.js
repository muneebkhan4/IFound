const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const passwordComplexity = require("joi-password-complexity");

const AutoIncrement = require('mongoose-sequence')(mongoose);


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
  phone_no:{
    type: String,
    // required: true,
    minlength: 10,
    maxlength: 20,
  },
  city:{
    type: String,
    required: false,
    minlength: 2,
    maxlength: 150,
  },
  state:{
    type: String,
    minlength:10,
    maxlength:150
  },
  cnic:{
    type: String,
    required: false,
    minlength: 9,
    maxlength: 20,
  },
  gender:{
    type: String,
    // required: true,
  },
  userID:{
    type:Number
  },
});
userSchema.plugin(AutoIncrement, {inc_field: 'userID'});



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

// let newItem1= new User({
//   name:"Zubair Ahmed",
//   email:"Usmanabeer@gmail.com",
//   password:"UsmanKhan565",
//   phone_no:"030631596145",
//   gender:'Male',
//   state:"IDKasdasasdasd"
// });
// newItem1.save();

// console.log(newItem1.userID);




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
