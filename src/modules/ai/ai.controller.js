const {
  generateRoadmapService,
  getRoadmapsService,
} = require("./ai.service");

const {
  generateAIAssessmentService,
} = require("./ai.service");

const {
  generateInterviewFeedbackService,
} = require("./ai.service");



// GENERATE ROADMAP
const generateRoadmapController =
  async (req, res) => {
    try {
      const roadmap =
        await generateRoadmapService(
          req.user._id
        );

      res.status(201).json({
        success: true,
        roadmap,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// GET ROADMAPS
const getRoadmapsController =
  async (req, res) => {
    try {
      const roadmaps =
        await getRoadmapsService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        roadmaps,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

// GENERATE AI ASSESSMENT
const generateAIAssessmentController =
  async (req, res) => {
    try {
      const {
        topic,
        difficultyLevel,
        numberOfQuestions,
      } = req.body;

      const assessment =
        await generateAIAssessmentService(
          topic,
          difficultyLevel,
          numberOfQuestions,
          req.user._id
        );

      res.status(201).json({
        success: true,
        assessment,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

// INTERVIEW FEEDBACK
const generateInterviewFeedbackController =
  async (req, res) => {
    try {
      const {
        question,
        answer,
      } = req.body;

      const feedback =
        await generateInterviewFeedbackService(
          req.user._id,
          question,
          answer
        );

      res.status(201).json({
        success: true,
        feedback,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  generateRoadmapController,
  getRoadmapsController,
  generateAIAssessmentController,
  generateInterviewFeedbackController,
};