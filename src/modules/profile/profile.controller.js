const {
  createProfileService,
  getMyProfileService,
  updateProfileService,
} = require("./profile.service");

const createProfileController =
  async (req, res) => {
    try {
      const profile =
        await createProfileService(
  req.user._id,
  req.body
);

      res.status(201).json({
        success: true,
        profile,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

const getMyProfileController =
  async (req, res) => {
    try {
      const profile =
        await getMyProfileService(
          req.user._id
        );

      res.status(200).json({
        success: true,
        profile,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  };

const updateProfileController =
  async (req, res) => {
    try {
      const profile =
        await updateProfileService(
          req.user._id,
          req.body
        );

      res.status(200).json({
        success: true,
        profile,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  createProfileController,
  getMyProfileController,
  updateProfileController,
};