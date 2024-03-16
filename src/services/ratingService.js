const Rating = require("../models/ratingModel");

const addReview = async (ratingData) => {
  try {
    const rating = await Rating.create(ratingData);
    return rating;
  } catch (error) {
    throw error;
  }
};

const getAllReviews = async (movieId) => {
  try {
    //console.log("INside service");
    const Ratings = await Rating.find(movieId);
    return Ratings;
  } catch (error) {
    throw error;
  }
};

const avgRating = async (movieId) => {
  try {
    const reviews = await Rating.find({movieId});
    if (reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for the movie' });
    }
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length;
   return averageRating;
  } catch (error) {
    throw error;
  }
  
};

const  updateReviewById= async (movieId,ratingId, userId,updatedData) => {
  try {
    const rating = await Rating.findOneAndUpdate(
      { _id: ratingId, movieId: movieId,userId:userId},
      { $set: updatedData },
      { new: true }
    );

    return rating;
  } catch (error) {
    throw error;
  }
};

const deleteReviewById = async (movieId, reviewId, userId) => {
  try {
    const rating = await Rating.findOneAndDelete({ _id:reviewId,movieId, userId });
    return rating;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
  avgRating,
};
