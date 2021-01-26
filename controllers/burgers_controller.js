// Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Get Routes
// =============================================================

// Reading through all burgers in database
router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        let handlebars_obj = {
            burgers: data
        };

        res.render("index", handlebars_obj);
    });
});

// Post Routes
// =============================================================

// Add a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

module.exports = router;