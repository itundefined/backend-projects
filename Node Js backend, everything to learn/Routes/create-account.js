const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
module.exports = router;

const localdb = [];

router.get("/", (req, res) => {
    res.send(localdb)
})

router.post("/", async (req, res) => { 
    const password = await bcrypt.hash(req.body.password, 10);    
    const user = { "name": req.body.name, "password": password, "role": req.body.role };
    if (!localdb.find(element => element.name === user.name)) {
        localdb.push(user);
        return res.status(201).send("Created successfully!");
    }
    return res.status(400).send("Invalid");
})