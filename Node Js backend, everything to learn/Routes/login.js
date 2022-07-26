const express = require("express");
const router = express.Router();
module.exports = router;
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();

const allusers = [];


router.get("/", (req, res) => {
  res.send("hey that is the Login User page welcome! ");
});

router.post("/", (req, res) => {
  const user = { "name": req.body.name, "role":req.body.role};
  const token = jsonwebtoken.sign(user, process.env.secret_key);
  res.send("your token is: " + token);
});


