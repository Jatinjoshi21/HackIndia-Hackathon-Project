const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const profileRoutes = require(
  "./modules/profile/profile.routes"
);
const assessmentRoutes =
  require(
    "./modules/assessment/assessment.routes"
  );
const analyticsRoutes =
  require(
    "./modules/analytics/analytics.routes"
  );

const aiRoutes = require(
  "./modules/ai/ai.routes"
);

const recruiterRoutes =
  require(
    "./modules/recruiter/recruiter.routes"
  );

const dashboardRoutes =
  require(
    "./modules/dashboard/dashboard.routes"
  );

const badgeRoutes = require(
  "./modules/badge/badge.routes"
);

const authRoutes = require("./modules/auth/auth.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use(
  "/api/assessments",
  assessmentRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

app.use(
  "/api/recruiter",
  recruiterRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use("/api/badges", badgeRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SkillBridge AI Backend Running",
  });
});

module.exports = app;