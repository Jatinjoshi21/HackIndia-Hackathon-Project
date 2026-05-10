const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  assignBadgesController,
  getMyBadgesController,
} = require(
  "./badge.controller"
);

const router = express.Router();


// ASSIGN BADGES
router.post(
  "/assign",
  protect,
  assignBadgesController
);


// GET BADGES
router.get(
  "/me",
  protect,
  getMyBadgesController
);

module.exports = router;