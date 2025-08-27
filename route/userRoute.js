const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// show welcome page/ view/index
router.get("/", userController.signupBtn);

// go to user signup page
router.get("/login-user", userController.signPage);

// notes app mainInterface database collection/ retrieve data from database
router.get("/mainInterface", userController.dbRetrieve);

// click signup btn go to home page/ mainInterface
router.get("/user-signup", userController.homePage);

module.exports = router;


