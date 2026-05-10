const StudentProfile = require(
  "../../models/StudentProfile"
);

const Analytics = require(
  "../../models/Analytics"
);


// FIND MATCHING CANDIDATES
const findCandidatesService =
  async (skills) => {
    const students =
      await StudentProfile.find({
        skills: {
          $in: skills,
        },
      }).populate(
        "userId",
        "name email"
      );

    let rankedCandidates = [];

    for (const student of students) {
      const analytics =
        await Analytics.findOne({
          studentId:
            student.userId._id,
        });

      const matchedSkills =
        student.skills.filter(
          (skill) =>
            skills.includes(skill)
        );

      rankedCandidates.push({
        student,

        readinessScore:
          analytics?.readinessScore ||
          0,

        matchedSkills,

        weakTopics:
          analytics?.weakTopics ||
          [],
      });
    }

    rankedCandidates.sort(
      (a, b) =>
        b.readinessScore -
        a.readinessScore
    );

    return rankedCandidates;
  };

module.exports = {
  findCandidatesService,
};