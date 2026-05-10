const mongoose = require("mongoose");

const recruiterProfileSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      companyName: {
        type: String,
        required: true,
      },

      companyDescription: {
        type: String,
      },

      hiringRoles: [
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
  "RecruiterProfile",
  recruiterProfileSchema
);