// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Express
// =============================================================
const PORT = process.env.PORT || 9080;
const app = express();

// Server setup
// =============================================================

// Sets static content from the "public" directory
app.use(express.static("public"));

// For parsing the app body as JSON
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// Handlebar setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes & let server access them
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Start server so it can listen for client requests
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});
