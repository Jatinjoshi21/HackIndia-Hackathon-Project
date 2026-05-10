const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const {
  createAssessmentController,
  addQuestionController,
  getAssessmentsController,
  getAssessmentQuestionsController,
  submitAssessmentController,
} = require(
  "./assessment.controller"
);

const router = express.Router();


// CREATE ASSESSMENT
router.post(
  "/create",
  protect,
  createAssessmentController
);


// ADD QUESTION
router.post(
  "/:assessmentId/question",
  protect,
  addQuestionController
);


// GET ALL ASSESSMENTS
router.get(
  "/",
  protect,
  getAssessmentsController
);


// GET QUESTIONS
router.get(
  "/:assessmentId/questions",
  protect,
  getAssessmentQuestionsController
);


// SUBMIT ASSESSMENT
router.post(
  "/:assessmentId/submit",
  protect,
  submitAssessmentController
);

module.exports = router;