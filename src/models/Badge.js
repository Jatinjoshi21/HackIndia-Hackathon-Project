const mongoose = require("mongoose");

const badgeSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      badgeName: {
        type: String,
      },

      description: {
        type: String,
      },

      icon: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Badge",
  badgeSchema
);