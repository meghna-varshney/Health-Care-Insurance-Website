//Install express server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/kenko-red"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/kenko-red/index.html"));
});

app.listen(process.env.PORT || 4200, () => {
  console.log("App is listening on port no 4200");
});
