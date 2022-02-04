//"Hello World"
// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Added Express js
const express = require("express");
// Added instance of express
const app = express();

//Middlewares and cors
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

//Pointing at the main website folder
app.use(express.static("website"));

//creating a Server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`running and gunning at localhost:${port}`);
});

//Set a post route
app.post("/add", (req, res) => {
  projectData = req.body;
  res.send(projectData);
});

//Get route
app.use("/all", (req, res) => {
  app.send(projectData);
});
