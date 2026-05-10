const Analytics = require(
  "../../models/Analytics"
);

const Submission = require(
  "../../models/Submission"
);

const {
  assignBadgesService,
} = require(
  "../badge/badge.service"
);

// UPDATE ANALYTICS
const updateAnalyticsService =
  async (studentId) => {
    const submissions =
      await Submission.find({
        studentId,
      });

    if (!submissions.length) {
      return null;
    }

    let totalScore = 0;

    let weakTopicsMap = {};

    submissions.forEach(
      (submission) => {
        totalScore +=
          submission.percentage;

        submission
          .weakTopicsDetected
          .forEach((topic) => {
            weakTopicsMap[topic] =
              (weakTopicsMap[
                topic
              ] || 0) + 1;
          });
      }
    );

    const averageScore =
      totalScore /
      submissions.length;

    const readinessScore =
      Math.min(
        100,
        Math.round(
          averageScore * 0.8 +
            submissions.length * 2
        )
      );

    const weakTopics =
      Object.keys(weakTopicsMap);

    let analytics =
      await Analytics.findOne({
        studentId,
      });

    if (!analytics) {
      analytics =
        await Analytics.create({
          studentId,
          averageScore,
          readinessScore,
          assessmentsTaken:
            submissions.length,
          weakTopics,
        });
    } else {
      analytics.averageScore =
        averageScore;

      analytics.readinessScore =
        readinessScore;

      analytics.assessmentsTaken =
        submissions.length;

      analytics.weakTopics =
        weakTopics;

      await analytics.save();
    }

    // AUTO ASSIGN BADGES
await assignBadgesService(
  studentId
);

    return analytics;
  };


// GET ANALYTICS
const getAnalyticsService =
  async (studentId) => {
    const analytics =
      await Analytics.findOne({
        studentId,
      });

    if (!analytics) {
      throw new Error(
        "Analytics not found"
      );
    }

    return analytics;
  };

module.exports = {
  updateAnalyticsService,
  getAnalyticsService,
};