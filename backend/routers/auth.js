const config = require("config");
const _ = require("lodash");
const Joi = require("joi");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = authUser(req.body); // basic things authentication like email and password lengths
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Invalid email or password.");

  const validAuth = await bcrypt.compare(req.body.password, user.password); // compare hashed password with original password

  if (!validAuth) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();

  //res.send(token); // avoid sending userId, asigned by database

  res.header("token", token).send(_.pick(user, ["email", "name"])); // avoid sending userId, asigned by database
});

function authUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(150).required().email(),
    password: Joi.string().min(5).max(150).required(),
  });
  return schema.validate(user);
}

module.exports = router;
