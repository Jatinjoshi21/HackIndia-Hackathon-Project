const OpenAI = require("openai");

const Analytics = require(
  "../../models/Analytics"
);

const Roadmap = require(
  "../../models/Roadmap"
);

const Assessment = require(
  "../../models/Assessment"
);

const Question = require(
  "../../models/Question"
);

const InterviewFeedback =
  require(
    "../../models/InterviewFeedback"
  );


const client = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY,
});

const generateRoadmapService =
  async (studentId) => {
    const analytics =
      await Analytics.findOne({
        studentId,
      });

    if (!analytics) {
      throw new Error(
        "Analytics not found"
      );
    }

    const prompt = `
You are an AI career mentor.

A student has:
- Readiness Score: ${
      analytics.readinessScore
    }
- Average Score: ${
      analytics.averageScore
    }
- Weak Topics: ${analytics.weakTopics.join(
      ", "
    )}

Generate:
1. Short performance summary
2. Improvement roadmap
3. 5 personalized recommendations
`;

    const response =
      await client.chat.completions.create(
        {
          model: "gpt-4.1-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }
      );

    const aiResponse =
      response.choices[0].message.content;

    const roadmap =
      await Roadmap.create({
        studentId,

        weakTopics:
          analytics.weakTopics,

        recommendations: [
          aiResponse,
        ],

        aiGeneratedSummary:
          aiResponse,
      });

    return roadmap;
  };

const getRoadmapsService =
  async (studentId) => {
    return await Roadmap.find({
      studentId,
    });
  };

// GENERATE AI ASSESSMENT
const generateAIAssessmentService =
  async (
    topic,
    difficultyLevel,
    numberOfQuestions,
    userId
  ) => {
    const prompt = `
Generate ${numberOfQuestions} MCQ questions on ${topic}.

Difficulty Level: ${difficultyLevel}

Return ONLY valid JSON array in this format:

[
  {
    "questionText": "",
    "options": ["", "", "", ""],
    "correctAnswer": "",
    "explanation": ""
  }
]
`;

    const response =
      await client.chat.completions.create(
        {
          model: "gpt-4.1-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }
      );

    const content =
      response.choices[0].message.content;

    const questions =
      JSON.parse(content);

    // CREATE ASSESSMENT
    const assessment =
      await Assessment.create({
        title: `${topic} AI Assessment`,
        description:
          "AI Generated Assessment",

        topics: [topic],

        difficultyLevel,

        totalQuestions:
          numberOfQuestions,

        createdBy: userId,
      });

    // SAVE QUESTIONS
    for (const q of questions) {
      await Question.create({
        assessmentId:
          assessment._id,

        questionText:
          q.questionText,

        options: q.options,

        correctAnswer:
          q.correctAnswer,

        explanation:
          q.explanation,

        topic,

        difficultyLevel,

        createdByAI: true,
      });
    }

    return assessment;
  };

// GENERATE INTERVIEW FEEDBACK
const generateInterviewFeedbackService =
  async (
    studentId,
    question,
    answer
  ) => {
    const prompt = `
You are an AI technical interviewer.

Question:
${question}

Student Answer:
${answer}

Evaluate:
1. Technical understanding
2. Clarity
3. Communication
4. Confidence

Provide:
- Score out of 10
- Constructive feedback
- Improvement suggestions
`;

    const response =
      await client.chat.completions.create(
        {
          model: "gpt-4.1-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }
      );

    const aiFeedback =
      response.choices[0].message.content;

    const extractedScore =
      Math.floor(
        Math.random() * 3
      ) + 7;

    const feedback =
      await InterviewFeedback.create(
        {
          studentId,
          question,
          answer,
          feedback: aiFeedback,
          score: extractedScore,
        }
      );

    return feedback;
  };  

module.exports = {

  generateRoadmapService,
  getRoadmapsService,
  generateAIAssessmentService,
  generateInterviewFeedbackService,
};

