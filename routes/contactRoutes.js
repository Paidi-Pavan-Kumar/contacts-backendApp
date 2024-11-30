const express = require("express");
const router = express.Router();


router.route("/").get((req, res) => {
    res.json({message: "Get all contacts (not yet implemented)"});
});

router.route("/").post((req, res) => {
    res.json({message: "Create a new Conatct (noy yet implemented)"});
})

router.route("/:id").get((req, res) => {
    res.json({message: `Get contact by id: ${req.params.id} (not yet implemented)`});
})

router.route("/:id").put((req, res) => {
    res.json({message: `Update contact by id: ${req.params.id} (not yet implemented)`});
})

router.route("/:id").delete((req, res) => {
    res.json({message: `Delete contact with ID: ${req.params.id} (not yet implemented)`});
})

module.exports = router;