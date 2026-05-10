const {
  getLeaderboardService,
  getPlatformStatsService,
  getTopPerformersService,
} = require("./dashboard.service");


// LEADERBOARD
const getLeaderboardController =
  async (req, res) => {
    try {
      const leaderboard =
        await getLeaderboardService();

      res.status(200).json({
        success: true,
        leaderboard,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// PLATFORM STATS
const getPlatformStatsController =
  async (req, res) => {
    try {
      const stats =
        await getPlatformStatsService();

      res.status(200).json({
        success: true,
        stats,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// TOP PERFORMERS
const getTopPerformersController =
  async (req, res) => {
    try {
      const performers =
        await getTopPerformersService();

      res.status(200).json({
        success: true,
        performers,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  getLeaderboardController,
  getPlatformStatsController,
  getTopPerformersController,
};