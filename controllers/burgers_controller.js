// Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Get Routes
// =============================================================
router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        let handlebars_obj = {
            burgers: data
        };

        res.render("index", handlebars_obj);
    });
});


module.exports = router;