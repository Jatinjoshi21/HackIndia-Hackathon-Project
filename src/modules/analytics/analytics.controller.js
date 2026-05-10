const {
  updateAnalyticsService,
  getAnalyticsService,
} = require("./analytics.service");


// UPDATE ANALYTICS
const updateAnalyticsController =
  async (req, res) => {
    try {
      const analytics =
        await updateAnalyticsService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        analytics,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// GET ANALYTICS
const getAnalyticsController =
  async (req, res) => {
    try {
      const analytics =
        await getAnalyticsService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        analytics,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  updateAnalyticsController,
  getAnalyticsController,
};