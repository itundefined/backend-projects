const express = require("express");
const router = express.Router();
module.exports = router;
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();

const subscribers = [
  { Arthur: "it is me arthur morgan and i know i am dangerous" },
  { dutch: "it is me Dutch and i know i am dangerous" },
];

router.get("/", checkingRole, (req, res) => {
  res.send(subscribers)
});



// Middleware for role
function checkingRole(req, res, next) {
  const user = jsonwebtoken.verify(req.headers.bearer, process.env.secret_key);
  if (user.role === "super admin" || user.role === "admin") {
    next();
  }
  else {
    res.status(400).send("You are not allowed to access this route! ");
  }
}