const mongoose = require("mongoose");

const roadmapSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      weakTopics: [
        {
          type: String,
        },
      ],

      recommendations: [
        {
          type: String,
        },
      ],

      aiGeneratedSummary: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Roadmap",
  roadmapSchema
);