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

// Update a burger
router.put("/api/burgers/:id", function(req, res) {
    let burgerCondition = "id = " + req.params.id;
    
    burger.updateOne(["devoured"], [req.body.devoured], burgerCondition, function(devResult) {
        if (devResult.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// Exports
// =============================================================
module.exports = router;