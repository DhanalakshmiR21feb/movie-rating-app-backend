
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;