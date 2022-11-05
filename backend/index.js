const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
cors = require("cors");
const user = require("./routers/user");
const auth = require("./routers/auth");
const app = express();

app.use(cors());
const port = 1000;

if (!config.get("JwtPrivateKey")) {
  console.log("FATAL ERROR: JwtPrivateKey is not defined!"); // set by running "set IFound_JwtPrivateKey= MySecureKey"
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/IFound")
  .then(() => console.log("connection to mongo db successful..."))
  .catch((err) => (console.error("Error in connecting to mongo db..."), err));

// parse application/json
app.use(express.json());
app.use("/api/users", user);
app.use("/api/auth", auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
