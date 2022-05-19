const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  year: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageURL: { type: String, default: "www.google.com" },
});

const Books = (module.exports = mongoose.model("Books", booksSchema));
module.export = Books;

// {
//   "id": 1,
//   "title": "The Shinobi Initiative",
//   "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//   "year": 2014,
//   "quantity": "10",
//   "imageURL": "/assets/shinobi-initiative.jpeg"
// }
