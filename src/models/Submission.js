const mongoose = require("mongoose");

const submissionSchema =
  new mongoose.Schema(
    {
      assessmentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
      },

      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      answers: [
        {
          questionId: {
            type:
              mongoose.Schema.Types.ObjectId,
            ref: "Question",
          },

          selectedAnswer: String,

          isCorrect: Boolean,

          topic: String,
        },
      ],

      score: {
        type: Number,
        default: 0,
      },

      percentage: {
        type: Number,
        default: 0,
      },

      weakTopicsDetected: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Submission",
  submissionSchema
);