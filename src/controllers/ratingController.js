const ratingService = require("../services/ratingService");
const addReview = async (req, res) => {
  try {
    const { rating, text } = req.body;
    const userId = req.user.id;
  // console.log("inside addreview service");
    const movieRev = await ratingService.addReview({
      movieId: req.params.id,
      userId,
      rating,
      text,
    });
    console.log("Review added successfully");
    res.status(201).json(movieRev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    //console.log("movie id for review", req.params.id);
    const reviews = await ratingService.getAllReviews({
      movieId: req.params.id,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateReviewById = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const userId = req.user.id;

    const updatedData = req.body;

    const review = await ratingService.updateReviewById(
      movieId,
      reviewId,
      userId,
      updatedData
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found." });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteReviewById = async (req, res) => {
  try {
    const userId = req.user.id;
    const reviewId=req.params.reviewId;
    const movieId=req.params.movieId;
    const success = await ratingService.deleteReviewById(movieId, reviewId, userId);

    if (!success) {
      return res.status(404).json({ message: "review not fund" });
    }

    res.status(204).json({message:"Deleted Successfuly"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const avgRating = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const averageRating = await ratingService.avgRating(id, userId);
    res.json({ message: averageRating });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
  avgRating,
};
