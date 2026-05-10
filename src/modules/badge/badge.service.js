const Badge = require(
  "../../models/Badge"
);

const Analytics = require(
  "../../models/Analytics"
);


// ASSIGN BADGES
const assignBadgesService =
  async (studentId) => {
    const analytics =
      await Analytics.findOne({
        studentId,
      });

    if (!analytics) {
      return [];
    }

    let badgesToAward = [];

    // READINESS BADGE
    if (
      analytics.readinessScore >=
      80
    ) {
      badgesToAward.push({
        badgeName:
          "Industry Ready",

        description:
          "Achieved readiness score above 80",

        icon: "🚀",
      });
    }

    // ASSESSMENT BADGE
    if (
      analytics.assessmentsTaken >=
      5
    ) {
      badgesToAward.push({
        badgeName:
          "Consistent Learner",

        description:
          "Completed 5 assessments",

        icon: "📚",
      });
    }

    // TOP SCORE BADGE
    if (
      analytics.averageScore >=
      90
    ) {
      badgesToAward.push({
        badgeName:
          "Top Performer",

        description:
          "Maintained average score above 90",

        icon: "🏆",
      });
    }

    // SAVE BADGES
    let savedBadges = [];

    for (const badge of badgesToAward) {
      const alreadyExists =
        await Badge.findOne({
          studentId,
          badgeName:
            badge.badgeName,
        });

      if (!alreadyExists) {
        const savedBadge =
          await Badge.create({
            studentId,
            ...badge,
          });

        savedBadges.push(
          savedBadge
        );
      }
    }

    return savedBadges;
  };


// GET MY BADGES
const getMyBadgesService =
  async (studentId) => {
    return await Badge.find({
      studentId,
    });
  };

module.exports = {
  assignBadgesService,
  getMyBadgesService,
};