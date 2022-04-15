const router = require("express").Router();
const user = require("../models/User");
//REGISTER

router.post("/register", async (req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err);
        console.log("aoleu")
    }
});

router.get("/salut", (req,res) => {
    res.send("hai noroc");
});

module.exports = router;