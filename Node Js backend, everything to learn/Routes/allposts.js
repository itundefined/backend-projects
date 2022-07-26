const express = require('express'); 
const router = express.Router();
module.exports = router;

const allposts = [{ 'Arthur': "it is me arthur morgan and i know i am dangerous"}, {'dutch':"it is me Dutch and i know i am dangerous"} ];

router.get('/', (req, res) => {
    res.send(allposts)
})


router.post('/', (req, res) => {
    
})