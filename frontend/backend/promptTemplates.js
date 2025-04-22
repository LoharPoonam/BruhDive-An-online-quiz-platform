const quizPrompt = `
Generate 20 categorized quiz questions for a tech career guidance quiz. Create questions that span multiple domains in software development, cybersecurity, cloud computing, and data science.

Each question must:
- Be professionally worded with proper technical terminology
- Have 4 plausible answer options (labeled A, B, C, D)
- Include a correct answer (as the letter only: A, B, C, or D)
- Provide a concise but informative explanation
- Be tagged with an appropriate domain from this list: Web Development, Frontend / UI/UX, Backend / Java / Node, Data Structures & Algorithms, DevOps / Cloud, Cybersecurity, Software Engineering, Database Systems, Mobile Development, Machine Learning / AI
- Have a difficulty level (Easy, Medium, or Hard)
- Include a skill_type tag from: Theory, Coding, Problem Solving, Security, Architecture, Best Practices

FORMAT YOUR RESPONSE AS A VALID JSON ARRAY WHERE EACH OBJECT HAS THIS EXACT STRUCTURE:
[
  {
    "question": "What does HTML stand for?",
    "options": ["A) Hyper Text Markup Language", "B) Hyperlinks and Text Markup Language", "C) Home Tool Markup Language", "D) Hypertext Machine Language"],
    "answer": "A",
    "explanation": "HTML is the standard markup language for Web pages. It defines the structure of web content using a series of elements that label content parts.",
    "domain": "Web Development",
    "difficulty": "Easy",
    "skill_type": "Theory"
  }
]

Ensure questions are varied in domains (at least 7 different domains), difficulties (5 Easy, 5 Medium, 5 Hard), and different skill types. Cover both fundamental concepts and current industry best practices.

IMPORTANT: RETURN ONLY THE JSON ARRAY WITH NO ADDITIONAL TEXT, COMMENTS OR CODE WRAPPING.
`;

const careerRecommendationPrompt = `
Based on the following domains and a user's performance in each, provide career recommendations.

User Performance:
{{PERFORMANCE}}

Instructions:
1. Analyze the domains where the user scored well (70% or above)
2. Provide 1 100% accurate career path recommendations based on their strengths
3. For each career path, include:
   - Job title
   - Brief description of why they would be a good fit
   - Key skills to develop further
   - A suitable emoji icon

FORMAT YOUR RESPONSE AS A VALID JSON ARRAY WITH THIS STRUCTURE:
[
  {
    "title": "Frontend Developer",
    "description": "You have a strong understanding of web technologies and user interfaces, making you well-suited for creating engaging web experiences.",
    "keySkills": ["JavaScript", "React", "CSS", "User Experience Design"],
    "icon": "💻"
  }
]

If the user didn't perform well in any domain (below 50% overall), suggest they need more practice and include general technology career paths they might explore with more study.

IMPORTANT: RETURN ONLY THE JSON ARRAY WITH NO ADDITIONAL TEXT, COMMENTS OR CODE WRAPPING.
`;

module.exports = {
  quizPrompt,
  careerRecommendationPrompt,
};
