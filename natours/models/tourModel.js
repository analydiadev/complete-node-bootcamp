const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    require: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    require: [true, "A tour must have a group size"],
  },
  difficulty: {
    type: String,
    trim: true,
    require: [true, "A tour must have a difficulty"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  //trim removes all the white space in the beginning and the end of the string.
  discount: Number,
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A tour must have a description"],
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image"]
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date],
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
