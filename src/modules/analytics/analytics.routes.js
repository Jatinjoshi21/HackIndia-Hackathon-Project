const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  updateAnalyticsController,
  getAnalyticsController,
} = require(
  "./analytics.controller"
);

const router = express.Router();


// UPDATE ANALYTICS
router.post(
  "/update",
  protect,
  updateAnalyticsController
);


// GET ANALYTICS
router.get(
  "/me",
  protect,
  getAnalyticsController
);

module.exports = router;