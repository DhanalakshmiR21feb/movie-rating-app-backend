const express=require("express");
const router=express.Router();
const authController=require("../controllers/authController");
const authTokenMiddleware=require("../middleware/authToken");

//register the user
router.post("/register",authController.register);

//user login
router.post("/login",authController.login);

module.exports=router;