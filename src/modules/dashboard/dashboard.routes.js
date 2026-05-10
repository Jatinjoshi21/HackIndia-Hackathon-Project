const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  getLeaderboardController,
  getPlatformStatsController,
  getTopPerformersController,
} = require(
  "./dashboard.controller"
);

const router = express.Router();


// LEADERBOARD
router.get(
  "/leaderboard",
  protect,
  getLeaderboardController
);


// PLATFORM STATS
router.get(
  "/stats",
  protect,
  getPlatformStatsController
);


// TOP PERFORMERS
router.get(
  "/top-performers",
  protect,
  getTopPerformersController
);

module.exports = router;