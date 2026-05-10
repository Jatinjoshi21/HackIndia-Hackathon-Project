const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  generateRoadmapController,
  getRoadmapsController,
} = require("./ai.controller");

const {
  generateAIAssessmentController,
} = require("./ai.controller");

const {
  generateInterviewFeedbackController,
} = require("./ai.controller");

const router = express.Router();


// GENERATE AI ROADMAP
router.post(
  "/generate-roadmap",
  protect,
  generateRoadmapController
);


// GET ROADMAPS
router.get(
  "/roadmaps",
  protect,
  getRoadmapsController
);

router.post(
  "/generate-assessment",
  protect,
  generateAIAssessmentController
);

router.post(
  "/interview-feedback",
  protect,
  generateInterviewFeedbackController
);

module.exports = router;