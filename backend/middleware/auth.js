const jwt = require("jsonwebtoken");
const config = require("config");

const _ = require("lodash");

const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate, validatePassword } = require("../models/user");
const { Image } = require("../models/image");
const { Post } = require("../models/personPost");

module.exports = function (req, res, next) {
  const token = req.header("x_auth_token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, config.get("JwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token.");
  }
};
