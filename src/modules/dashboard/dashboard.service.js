const Analytics = require(
  "../../models/Analytics"
);

const StudentProfile = require(
  "../../models/StudentProfile"
);

const Submission = require(
  "../../models/Submission"
);

const Assessment = require(
  "../../models/Assessment"
);


// LEADERBOARD
const getLeaderboardService =
  async () => {
    const leaderboard =
      await Analytics.find()
        .sort({
          readinessScore: -1,
        })
        .limit(10)
        .populate(
          "studentId",
          "name email"
        );

    return leaderboard;
  };


// PLATFORM STATS
const getPlatformStatsService =
  async () => {
    const totalStudents =
      await StudentProfile.countDocuments();

    const totalAssessments =
      await Assessment.countDocuments();

    const totalSubmissions =
      await Submission.countDocuments();

    const averageReadiness =
      await Analytics.aggregate([
        {
          $group: {
            _id: null,
            averageReadiness: {
              $avg:
                "$readinessScore",
            },
          },
        },
      ]);

    return {
      totalStudents,
      totalAssessments,
      totalSubmissions,

      averageReadiness:
        averageReadiness[0]
          ?.averageReadiness || 0,
    };
  };


// TOP PERFORMERS
const getTopPerformersService =
  async () => {
    const performers =
      await Analytics.find()
        .sort({
          averageScore: -1,
        })
        .limit(5)
        .populate(
          "studentId",
          "name email"
        );

    return performers;
  };

module.exports = {
  getLeaderboardService,
  getPlatformStatsService,
  getTopPerformersService,
};