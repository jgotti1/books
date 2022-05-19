// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Hello world");
});
const books_controller = require("./controller/books_controller");
app.use("/books", books_controller);

//mongoose connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("connected to mongo: ", process.env.MONGO_URI);
});
// LISTEN
app.listen(PORT, () => {
  console.log("Welcome... connecting at port", PORT);
});
// 404 Page
app.get("*", (req, res) => {
  res.render("page404");
});
