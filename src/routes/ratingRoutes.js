const express=require("express");
const router=express.Router();
const ratingController=require("../controllers/ratingController");
const authTokenMiddleware=require("../middleware/authToken");

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