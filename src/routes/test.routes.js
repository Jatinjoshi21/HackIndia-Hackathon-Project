const express = require("express");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/student",
  protect,
  authorizeRoles("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Student route accessed",
      user: req.user,
    });
  }
);

router.get(
  "/recruiter",
  protect,
  authorizeRoles("recruiter"),
  (req, res) => {
    res.json({
      success: true,
      message: "Recruiter route accessed",
      user: req.user,
    });
  }
);

module.exports = router;