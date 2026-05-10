# SkillBridge AI 🚀

An AI-powered readiness intelligence and smart hiring platform that helps students assess real-world skills, identify weaknesses, improve through personalized AI guidance, and connect with recruiters through data-driven candidate matching.

---

# 🌟 Problem Statement

Students often struggle to understand:

* Their actual industry readiness
* Which technical skills they lack
* How recruiters evaluate them
* What to improve for placements/interviews

Recruiters also face major challenges:

* Resume-based filtering is inefficient
* Practical readiness is hard to evaluate
* Skill validation is inconsistent
* Finding truly job-ready candidates takes time

---

# 💡 Our Solution

SkillBridge AI creates an intelligent ecosystem where:

✅ Students take AI-generated assessments
✅ Weak topics are detected automatically
✅ Readiness scores are calculated dynamically
✅ AI generates personalized learning roadmaps
✅ Recruiters discover candidates using readiness intelligence instead of resumes alone

---

# 🧠 Core Innovation

## Readiness Intelligence Engine

The platform continuously analyzes:

```text
Assessments
→ Performance Analytics
→ Weak Topic Detection
→ Readiness Score
→ AI Recommendations
→ Recruiter Matching
```

Instead of just giving scores, the system builds a complete readiness profile for every student.

---

# ✨ Key Features

## 👨‍🎓 Student Features

* JWT Authentication
* Student Profile System
* AI-Generated Assessments
* MCQ-Based Skill Assessments
* Automatic Scoring Engine
* Weak Topic Detection
* Readiness Score Calculation
* AI-Powered Learning Roadmaps
* AI Interview Feedback
* Badge & Achievement System
* Analytics Dashboard
* Leaderboard System

---

## 🏢 Recruiter Features

* Recruiter Authentication
* Candidate Discovery Engine
* Skill-Based Candidate Search
* Readiness-Based Ranking
* Candidate Match Insights
* Smart Filtering

---

## 🤖 AI Features

* AI-generated assessments
* Personalized learning recommendations
* Interview answer evaluation
* Weak topic analysis
* Intelligent recruiter matching

Powered by:

* entity["company","OpenAI","Artificial intelligence company"] API

---

# 🏗️ System Architecture

```text
Frontend (React)
        ↓
Express.js API Layer
        ↓
Business Logic Layer
        ↓
MongoDB Database
        ↓
OpenAI Intelligence Layer
```

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* Recharts / Chart.js

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* bcrypt.js

## AI

* entity["company","OpenAI","Artificial intelligence company"] API

---

# 🗂️ Backend Architecture

```text
src/
│
├── models/
├── middleware/
├── modules/
│   ├── auth/
│   ├── profile/
│   ├── assessment/
│   ├── analytics/
│   ├── recruiter/
│   ├── ai/
│   ├── dashboard/
│   └── badge/
│
├── utils/
├── seed/
├── app.js
└── server.js
```

---

# 🔐 Authentication Flow

```text
Signup/Login
↓
JWT Generated
↓
Cookie + Token Stored
↓
Protected Routes Access
↓
Role-Based Authorization
```

Roles:

* Student
* Recruiter
* Admin

---

# 📊 Analytics Engine

The analytics engine automatically calculates:

* Readiness Score
* Average Performance
* Weak Topics
* Topic Mastery
* Learning Progress
* Assessment Consistency

---

# 🧪 Assessment Flow

```text
Student Takes Assessment
↓
Automatic Evaluation
↓
Weak Topics Detected
↓
Analytics Updated
↓
Badges Assigned
↓
AI Roadmap Generated
```

---

# 🤖 AI Roadmap Generation

The AI engine generates:

* Personalized improvement plans
* Learning recommendations
* Skill development guidance
* Weak topic improvement suggestions

---

# 🎯 Recruiter Intelligence Engine

Recruiters can:

* Search candidates by skills
* Rank students by readiness
* Identify high-performing students
* Discover hidden talent

Candidate ranking is based on:

```text
Skills Match
+
Readiness Score
+
Assessment Performance
+
Consistency
```

---

# 🏅 Badge System

Students unlock achievements such as:

* 🚀 Industry Ready
* 🏆 Top Performer
* 📚 Consistent Learner

This improves:

* engagement
* gamification
* motivation
* platform experience

---

# 📈 Dashboard Features

## Student Dashboard

* Readiness score
* Weak topic heatmap
* Performance analytics
* AI roadmap
* Achievement badges

## Recruiter Dashboard

* Candidate rankings
* Skill match insights
* Top performers
* Hiring analytics

---

# 🔥 Demo Flow

## Student Journey

```text
Generate AI Assessment
↓
Take Assessment
↓
Weak Topics Detected
↓
Readiness Score Updated
↓
AI Roadmap Generated
↓
Badges Awarded
```

---

## Recruiter Journey

```text
Recruiter Enters Required Skills
↓
Platform Finds Matching Students
↓
Candidates Ranked Intelligently
↓
Recruiter Identifies Best Talent
```

---

# 🚀 Future Scope

* Adaptive learning paths
* Real coding compiler integration
* Resume analysis
* Video interview AI analysis
* Placement prediction engine
* Company-specific preparation tracks
* AI mock interviews
* Advanced recruiter analytics
* Skill verification certificates

---

# 📦 Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>
cd skillbridge-ai
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

---

## 4. Run Server

```bash
npm run dev
```

---

## 5. Seed Demo Data

```bash
node src/seed/seedData.js
```

---

# 📡 Important APIs

## Authentication

```text
POST /api/auth/signup
POST /api/auth/login
```

---

## Profile

```text
GET /api/profile/me
PUT /api/profile/update
```

---

## Assessments

```text
POST /api/assessments/create
POST /api/assessments/:assessmentId/question
POST /api/assessments/:assessmentId/submit
GET  /api/assessments
```

---

## Analytics

```text
GET /api/analytics/me
```

---

## AI

```text
POST /api/ai/generate-roadmap
POST /api/ai/generate-assessment
POST /api/ai/interview-feedback
```

---

## Recruiter

```text
POST /api/recruiter/find-candidates
```

---

# 🏆 Why SkillBridge AI Stands Out

Unlike traditional learning or hiring platforms, SkillBridge AI focuses on:

✅ Real readiness intelligence
✅ Continuous performance analysis
✅ AI-powered career guidance
✅ Smart recruiter matching
✅ Personalized learning pathways

This creates a complete bridge between:

```text
Learning ↔ Skill Validation ↔ Hiring
```

---

# 👥 Team

Built with ❤️ during a Hackathon using:

* MERN Stack
* AI-powered intelligence systems
* Modern scalable backend architecture

---

# 📜 License

This project is developed for educational and hackathon purposes.

---

# ⭐ Final Vision

SkillBridge AI aims to become:

> “The intelligence layer between learning and hiring.”

A platform where students don’t just learn — they understand their readiness, improve intelligently, and get discovered based on actual capability instead of resumes alone.
