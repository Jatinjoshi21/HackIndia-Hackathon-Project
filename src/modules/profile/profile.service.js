const StudentProfile = require(
  "../../models/StudentProfile"
);

const createProfileService =
  async (userId, data) => {
    const existingProfile =
      await StudentProfile.findOne({
        userId,
      });

    if (existingProfile) {
      throw new Error(
        "Profile already exists"
      );
    }

    const profile =
      await StudentProfile.create({
        userId,
        ...data,
      });

    return profile;
  };

const getMyProfileService =
  async (userId) => {
    const profile =
      await StudentProfile.findOne({
        userId,
      }).populate(
        "userId",
        "name email role"
      );

    if (!profile) {
      throw new Error(
        "Profile not found"
      );
    }

    return profile;
  };

const updateProfileService =
  async (userId, data) => {
    const profile =
      await StudentProfile.findOneAndUpdate(
        { userId },
        data,
        {
          new: true,
        }
      );

    return profile;
  };

module.exports = {
  createProfileService,
  getMyProfileService,
  updateProfileService,
};