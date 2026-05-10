const mongoose = require("mongoose");

const interviewFeedbackSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      question: {
        type: String,
      },

      answer: {
        type: String,
      },

      feedback: {
        type: String,
      },

      score: {
        type: Number,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "InterviewFeedback",
  interviewFeedbackSchema
);