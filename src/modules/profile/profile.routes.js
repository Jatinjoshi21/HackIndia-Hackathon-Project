const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  createProfileController,
  getMyProfileController,
  updateProfileController,
} = require("./profile.controller");

const router = express.Router();

router.post(
  "/create",
  protect,
  createProfileController
);

router.get(
  "/me",
  protect,
  getMyProfileController
);

router.put(
  "/update",
  protect,
  updateProfileController
);

module.exports = router;