const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 1000;
cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let x = fs.readFileSync("hello.html");
  res.end(x.toString());
});

app.get("/api/login", (req, res) => {
  var x = req.body.name;
  res.send(x);
});

app.get("/about-us", (req, res) => {
  res.end(
    "<h1>About us</h1> <p>I am Software Engineer with many years of experience. I am learing Mern Stack.</p>"
  );
});

app.get("/contact-us", (req, res) => {
  res.end("<h1>Contact us:</h1> <p>000-3054312</p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb://localhost/IFound")
  .then(() => console.log("connection to mongo db successful..."))
  .catch((err) => (console.error("Error in connecting to mongo db..."), err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// mapping our schema to the
const User = mongoose.model("User", userSchema);

// deault: Date.now

async function createUser() {
  const muneeb = new User({
    email: "muneeb@gmail.com",
    password: "khan",
  });
  const result = await muneeb.save();

  console.log(result);
}

//createUser();

// all -> .find()

async function getUser() {
  const user = await User.find();
  console.log(user);
}

getUser();
