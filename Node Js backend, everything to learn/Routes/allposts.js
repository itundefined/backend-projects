const express = require('express'); 
const router = express.Router();
module.exports = router;
let allposts = require("../model/localStorage")


router.get('/', (req, res) => {
    res.send(allposts)
})
