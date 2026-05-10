const mongoose = require("mongoose");

const assessmentSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      topics: [
        {
          type: String,
        },
      ],

      difficultyLevel: {
        type: String,
        enum: [
          "easy",
          "medium",
          "hard",
        ],
        default: "easy",
      },

      duration: {
        type: Number,
        default: 30,
      },

      totalQuestions: {
        type: Number,
        default: 0,
      },

      createdBy: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Assessment",
  assessmentSchema
);