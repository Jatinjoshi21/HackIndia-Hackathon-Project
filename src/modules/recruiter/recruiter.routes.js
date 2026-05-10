const express = require("express");

const protect = require(
  "../../middleware/authMiddleware"
);

const authorizeRoles = require(
  "../../middleware/roleMiddleware"
);

const {
  findCandidatesController,
} = require(
  "./recruiter.controller"
);

const router = express.Router();


// FIND CANDIDATES
router.post(
  "/find-candidates",

  protect,

  authorizeRoles("recruiter"),

  findCandidatesController
);

module.exports = router;