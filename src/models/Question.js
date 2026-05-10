const mongoose = require("mongoose");

const questionSchema =
  new mongoose.Schema(
    {
      assessmentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
        required: true,
      },

      questionText: {
        type: String,
        required: true,
      },

      options: [
        {
          type: String,
        },
      ],

      correctAnswer: {
        type: String,
        required: true,
      },

      topic: {
        type: String,
        required: true,
      },

      difficultyLevel: {
        type: String,
        enum: [
          "easy",
          "medium",
          "hard",
        ],
        default: "easy",
      },

      explanation: {
        type: String,
      },

      createdByAI: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Question",
  questionSchema
);