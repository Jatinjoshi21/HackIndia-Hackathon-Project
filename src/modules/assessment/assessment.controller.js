const {
  createAssessmentService,
  addQuestionService,
  getAssessmentsService,
  getAssessmentQuestionsService,
  submitAssessmentService,
} = require("./assessment.service");


// CREATE ASSESSMENT
const createAssessmentController =
  async (req, res) => {
    try {
      const assessment =
        await createAssessmentService(
          req.body,
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


// ADD QUESTION
const addQuestionController =
  async (req, res) => {
    try {
      const question =
        await addQuestionService(
          req.params.assessmentId,
          req.body
        );

      res.status(201).json({
        success: true,
        question,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// GET ASSESSMENTS
const getAssessmentsController =
  async (req, res) => {
    try {
      const assessments =
        await getAssessmentsService();

      res.status(200).json({
        success: true,
        assessments,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// GET QUESTIONS
const getAssessmentQuestionsController =
  async (req, res) => {
    try {
      const questions =
        await getAssessmentQuestionsService(
          req.params.assessmentId
        );

      res.status(200).json({
        success: true,
        questions,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// SUBMIT ASSESSMENT
const submitAssessmentController =
  async (req, res) => {
    try {
      const submission =
        await submitAssessmentService(
          req.params.assessmentId,
          req.user._id,
          req.body.answers
        );

      res.status(201).json({
        success: true,
        submission,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  createAssessmentController,
  addQuestionController,
  getAssessmentsController,
  getAssessmentQuestionsController,
  submitAssessmentController,
};