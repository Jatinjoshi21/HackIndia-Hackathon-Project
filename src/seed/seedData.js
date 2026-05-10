require("dotenv").config();

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const User = require(
  "../models/User"
);

const StudentProfile = require(
  "../models/StudentProfile"
);

const Analytics = require(
  "../models/Analytics"
);

const Badge = require(
  "../models/Badge"
);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB Connected"
    );
  });

const seedData = async () => {
  try {
    // CLEAR OLD DATA
    await User.deleteMany();
    await StudentProfile.deleteMany();
    await Analytics.deleteMany();
    await Badge.deleteMany();

    const hashedPassword =
      await bcrypt.hash(
        "123456",
        10
      );

    // CREATE STUDENTS
    const students = [];

    for (let i = 1; i <= 5; i++) {
      const user =
        await User.create({
          name: `Student ${i}`,

          email: `student${i}@gmail.com`,

          password:
            hashedPassword,

          role: "student",
        });

      students.push(user);

      // PROFILE
      await StudentProfile.create({
        userId: user._id,

        bio: "Aspiring developer",

        college:
          "VIT Bhopal",

        skills: [
          "Node.js",
          "MongoDB",
          "React",
        ],
      });

      // ANALYTICS
      await Analytics.create({
        studentId: user._id,

        averageScore:
          60 + i * 5,

        readinessScore:
          65 + i * 5,

        assessmentsTaken:
          3 + i,

        weakTopics: [
          "Recursion",
        ],
      });

      // BADGE
      await Badge.create({
        studentId: user._id,

        badgeName:
          "Industry Ready",

        description:
          "High readiness score",

        icon: "🚀",
      });
    }

    // RECRUITER
    await User.create({
      name: "Recruiter",

      email:
        "recruiter@gmail.com",

      password:
        hashedPassword,

      role: "recruiter",
    });

    console.log(
      "Seed Data Inserted"
    );

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedData();