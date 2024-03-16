const express=require("express");
const router=express.Router();
const movieController=require("../controllers/movieController");
const authTokenMiddleware=require("../middleware/authToken");
const ratingController=require("../controllers/ratingController");
//MOVIES
//Add movie
router.post("/",authTokenMiddleware,movieController.addMovie);

//get all movies
router.get("/",authTokenMiddleware,movieController.getAllMovies);

//update movie
router.put("/:id",authTokenMiddleware,movieController.updateMovie);

//get a specific movie
router.get("/:id",authTokenMiddleware,movieController.getMovieById);

//delete a movie
router.delete("/:id",authTokenMiddleware,movieController.deleteMovieById);

//REVIEWS
//add review
router.post("/:id/reviews",authTokenMiddleware,ratingController.addReview);

//get all reviews
router.get("/:id/reviews",authTokenMiddleware,ratingController.getAllReviews);

//update review
router.put("/:movieId/reviews/:reviewId",authTokenMiddleware,ratingController.updateReviewById);

//delete review
router.delete("/:movieId/reviews/:reviewId",authTokenMiddleware,ratingController.deleteReviewById);

//get average Rating
router.get("/:id/averageRating",authTokenMiddleware,ratingController.avgRating);

module.exports=router;