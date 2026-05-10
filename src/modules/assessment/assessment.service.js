const Assessment = require(
  "../../models/Assessment"
);

const Question = require(
  "../../models/Question"
);

const Submission = require(
  "../../models/Submission"
);

const {
  updateAnalyticsService,
} = require(
  "../analytics/analytics.service"
);

// CREATE ASSESSMENT
const createAssessmentService =
  async (data, userId) => {
    const assessment =
      await Assessment.create({
        ...data,
        createdBy: userId,
      });

    return assessment;
  };


// ADD QUESTION
const addQuestionService =
  async (assessmentId, data) => {
    const question =
      await Question.create({
        assessmentId,
        ...data,
      });

    await Assessment.findByIdAndUpdate(
      assessmentId,
      {
        $inc: {
          totalQuestions: 1,
        },
      }
    );

    return question;
  };


// GET ALL ASSESSMENTS
const getAssessmentsService =
  async () => {
    return await Assessment.find();
  };


// GET QUESTIONS OF ASSESSMENT
const getAssessmentQuestionsService =
  async (assessmentId) => {
    return await Question.find({
      assessmentId,
    });
  };


// SUBMIT ASSESSMENT
const submitAssessmentService =
  async (
    assessmentId,
    studentId,
    submittedAnswers
  ) => {
    const questions =
      await Question.find({
        assessmentId,
      });

    let correctCount = 0;

    let processedAnswers = [];

    let weakTopicsMap = {};

    questions.forEach((question) => {
      const submitted =
        submittedAnswers.find(
          (ans) =>
            ans.questionId ===
            question._id.toString()
        );

      const isCorrect =
        submitted &&
        submitted.selectedAnswer ===
          question.correctAnswer;

      if (isCorrect) {
        correctCount++;
      } else {
        weakTopicsMap[question.topic] =
          (weakTopicsMap[
            question.topic
          ] || 0) + 1;
      }

      processedAnswers.push({
        questionId: question._id,
        selectedAnswer:
          submitted?.selectedAnswer ||
          "",
        isCorrect,
        topic: question.topic,
      });
    });

    const percentage =
      (correctCount /
        questions.length) *
      100;

    const weakTopicsDetected =
      Object.keys(weakTopicsMap);

    const submission =
      await Submission.create({
        assessmentId,
        studentId,

        answers: processedAnswers,

        score: correctCount,

        percentage,

        weakTopicsDetected,
      });

      await updateAnalyticsService(
  studentId
);

    return submission;
  };

module.exports = {
  createAssessmentService,
  addQuestionService,
  getAssessmentsService,
  getAssessmentQuestionsService,
  submitAssessmentService,
};