const mongoose = require("mongoose");

const studentProfileSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      bio: {
        type: String,
        default: "",
      },

      college: {
        type: String,
        default: "",
      },

      graduationYear: {
        type: Number,
      },

      skills: [
        {
          type: String,
        },
      ],

      readinessScore: {
        type: Number,
        default: 0,
      },

      weakTopics: [
        {
          type: String,
        },
      ],

      xp: {
        type: Number,
        default: 0,
      },

      streak: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "StudentProfile",
  studentProfileSchema
);