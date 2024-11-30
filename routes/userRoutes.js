const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
    res.json({message : "register a user"});
});

router.route("/register").post((req, res) => {
    res.json({message : "register user"});
});

router.route("/login").post((req, res) => {
    res.json({message : "login user"});
});

router.route("/current").get((req, res) => {
    res.json({message : "current user"});
});

module.exports = router;