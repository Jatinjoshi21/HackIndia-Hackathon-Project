const mongoose = require("mongoose");

const analyticsSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      averageScore: {
        type: Number,
        default: 0,
      },

      readinessScore: {
        type: Number,
        default: 0,
      },

      assessmentsTaken: {
        type: Number,
        default: 0,
      },

      weakTopics: [
        {
          type: String,
        },
      ],

      topicMastery: [
        {
          topic: String,
          masteryPercentage: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Analytics",
  analyticsSchema
);