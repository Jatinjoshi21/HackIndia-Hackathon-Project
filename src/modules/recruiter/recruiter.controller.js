const {
  findCandidatesService,
} = require("./recruiter.service");


// FIND CANDIDATES
const findCandidatesController =
  async (req, res) => {
    try {
      const candidates =
        await findCandidatesService(
          req.body.skills
        );

      res.status(200).json({
        success: true,
        candidates,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  findCandidatesController,
};