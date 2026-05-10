const express = require("express");

const {
  signupController,
  loginController,
} = require("./auth.controller");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth routes working",
  });
});

router.post("/signup", signupController);
router.post("/login", loginController);

module.exports = router;