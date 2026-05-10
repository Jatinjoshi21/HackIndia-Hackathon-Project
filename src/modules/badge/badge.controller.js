const {
  assignBadgesService,
  getMyBadgesService,
} = require("./badge.service");


// ASSIGN BADGES
const assignBadgesController =
  async (req, res) => {
    try {
      const badges =
        await assignBadgesService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        badges,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// GET BADGES
const getMyBadgesController =
  async (req, res) => {
    try {
      const badges =
        await getMyBadgesService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        badges,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  assignBadgesController,
  getMyBadgesController,
};