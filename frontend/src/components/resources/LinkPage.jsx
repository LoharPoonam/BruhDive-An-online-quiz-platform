import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./links.css";

const linksData = {
  internships: [
    {
      name: "300+ Internships",
      url: "https://in.prosple.com/search-internships",
    },
    {
      name: "Microsoft Internship",
      url: "https://careers.microsoft.com/students/us/en",
    },
    {
      name: "Amazon Internship",
      url: "https://www.amazon.jobs/en/teams/internships-for-students",
    },
    {
      name: "Meta Internship",
      url: "https://www.metacareers.com/students",
    },
    {
      name: "Apple Internship",
      url: "https://www.apple.com/careers/internship/",
    },
    {
      name: "Tesla Internship",
      url: "https://www.tesla.com/careers/search/?query=intern",
    },
    {
      name: "Adobe Internship",
      url: "https://adobe.wd5.myworkdayjobs.com/en-US/external_university",
    },
    {
      name: "Intel Internship",
      url: "https://www.intel.com/content/www/us/en/jobs/students/internships.html",
    },
    {
      name: "IBM Internship",
      url: "https://www.ibm.com/careers/internships",
    },
    {
      name: "Netflix Internship",
      url: "https://jobs.netflix.com/students",
    },
    {
      name: "Twitter (X) Internship",
      url: "https://careers.twitter.com/en/university.html", // Valid if still hosted
    },
    {
      name: "LinkedIn Internship",
      url: "https://careers.linkedin.com/students",
    },
    {
      name: "Spotify Internship",
      url: "https://www.lifeatspotify.com/students",
    },
    {
      name: "Uber Internship",
      url: "https://www.uber.com/global/en/careers/teams/university/",
    },
    {
      name: "Salesforce Internship",
      url: "https://www.salesforce.com/company/careers/university-recruiting/",
    },
    {
      name: "Oracle Internship",
      url: "https://www.oracle.com/corporate/careers/students-grads/",
    },
    {
      name: "Dell Internship",
      url: "https://jobs.dell.com/students",
    },
    {
      name: "Snapchat Internship",
      url: "https://careers.snap.com/university",
    },
    {
      name: "SpaceX Internship",
      url: "https://www.spacex.com/careers/internships",
    },
    {
      name: "PayPal Internship",
      url: "https://www.paypal.com/us/webapps/mpp/jobs/students",
    },
  ],

  courses: [
    {
      name: "Harvard CS50 (Free)",
      url: "https://cs50.harvard.edu/",
    },
    {
      name: "Udemy Web Development Bootcamp",
      url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
    {
      name: "MIT OpenCourseWare (Programming)",
      url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
    },
    {
      name: "Coursera Python for Everybody",
      url: "https://www.coursera.org/specializations/python",
    },
    {
      name: "Stanford Machine Learning (Andrew Ng)",
      url: "https://www.coursera.org/learn/machine-learning",
    },
    {
      name: "Full Stack Open by University of Helsinki",
      url: "https://fullstackopen.com/en/",
    },
    {
      name: "Khan Academy Computer Science",
      url: "https://www.khanacademy.org/computing/computer-science",
    },
    {
      name: "freeCodeCamp - Responsive Web Design",
      url: "https://www.freecodecamp.org/learn/responsive-web-design/",
    },
    {
      name: "CS50 Web Programming with Python & JavaScript",
      url: "https://cs50.harvard.edu/web/",
    },
    {
      name: "Data Science and ML with Python (Udacity)",
      url: "https://www.udacity.com/course/data-scientist-nanodegree--nd025",
    },
    {
      name: "Google IT Automation with Python (Coursera)",
      url: "https://www.coursera.org/professional-certificates/google-it-automation",
    },
    {
      name: "AWS Certified Developer Associate",
      url: "https://aws.amazon.com/certification/certified-developer-associate/",
    },
    {
      name: "JavaScript.info (Free JS Tutorial)",
      url: "https://javascript.info/",
    },
    {
      name: "The Odin Project - Full Stack Curriculum",
      url: "https://www.theodinproject.com/",
    },
    {
      name: "Springboard Data Science Bootcamp",
      url: "https://www.springboard.com/courses/data-science-career-track/",
    },
    {
      name: "CS50 AI (Artificial Intelligence)",
      url: "https://cs50.harvard.edu/ai/",
    },
    {
      name: "LeetCode Algorithm Course",
      url: "https://leetcode.com/explore/",
    },
    {
      name: "Pluralsight - Angular Learning Path",
      url: "https://www.pluralsight.com/paths/angular",
    },
    {
      name: "Django for Beginners",
      url: "https://djangoforbeginners.com/",
    },
    {
      name: "Microsoft Learn - Azure Fundamentals",
      url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
  ],

  roadmaps: [
    { name: "Frontend Developer Roadmap", url: "https://roadmap.sh/frontend" },
    { name: "Backend Developer Roadmap", url: "https://roadmap.sh/backend" },
    {
      name: "Full Stack Developer Roadmap",
      url: "https://roadmap.sh/fullstack",
    },
    { name: "React Developer Roadmap", url: "https://roadmap.sh/react" },
    { name: "Angular Developer Roadmap", url: "https://roadmap.sh/angular" },
    { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" },
    {
      name: "Data Scientist Roadmap",
      url: "https://roadmap.sh/data-scientist",
    },
    { name: "AI/ML Engineer Roadmap", url: "https://roadmap.sh/ai" },
    {
      name: "Cyber Security Roadmap",
      url: "https://roadmap.sh/cyber-security",
    },
    { name: "Mobile Developer Roadmap", url: "https://roadmap.sh/mobile" },
    {
      name: "Blockchain Developer Roadmap",
      url: "https://roadmap.sh/blockchain",
    },
    { name: "Game Developer Roadmap", url: "https://roadmap.sh/game" },
    { name: "Python Developer Roadmap", url: "https://roadmap.sh/python" },
    { name: "Java Developer Roadmap", url: "https://roadmap.sh/java" },
    { name: "C++ Developer Roadmap", url: "https://roadmap.sh/cpp" },
    { name: "Node.js Developer Roadmap", url: "https://roadmap.sh/nodejs" },
    { name: "Go Developer Roadmap", url: "https://roadmap.sh/golang" },
    { name: "Rust Developer Roadmap", url: "https://roadmap.sh/rust" },
    { name: "Testing & QA Roadmap", url: "https://roadmap.sh/testing" },
    {
      name: "Software Architecture Roadmap",
      url: "https://roadmap.sh/software-architecture",
    },
  ],
  hackathons: [
    {
      name: "Devpost Hackathons",
      url: "https://devpost.com/hackathons",
    },
    {
      name: "Major League Hacking (MLH) 2025 Season",
      url: "https://mlh.io/seasons/2025/events",
    },
    {
      name: "HackMIT",
      url: "https://hackmit.org/",
    },
    {
      name: "ETHGlobal Hackathons",
      url: "https://ethglobal.com/",
    },
    {
      name: "Google Code Jam",
      url: "https://codingcompetitions.withgoogle.com/codejam",
    },
    {
      name: "Facebook Hacker Cup",
      url: "https://www.facebook.com/codingcompetitions/hacker-cup",
    },
    {
      name: "Hash Code (Google)",
      url: "https://codingcompetitions.withgoogle.com/hashcode",
    },
    {
      name: "Topcoder Hackathons",
      url: "https://www.topcoder.com/challenges",
    },
    {
      name: "Kaggle Competitions",
      url: "https://www.kaggle.com/competitions",
    },
    {
      name: "NASA Space Apps Challenge 2025",
      url: "https://www.spaceappschallenge.org/",
    },
    {
      name: "Hackathons on HackerEarth",
      url: "https://www.hackerearth.com/challenges/",
    },
    {
      name: "Open Hackathons (Intel)",
      url: "https://www.openhackathons.org/s/upcoming-events",
    },
    {
      name: "AI Agents Hackathon 2025 (Microsoft)",
      url: "https://microsoft.github.io/AI_Agents_Hackathon/",
    },
    {
      name: "nf-core Hackathon March 2025",
      url: "https://nf-co.re/events/2025/hackathon-march-2025",
    },
    {
      name: "Hackathons on Reskill",
      url: "https://reskilll.com/allhacks",
    },
    {
      name: "High School Hackathons 2025 (Hack Club)",
      url: "https://hackathons.hackclub.com/",
    },
    {
      name: "Arman's Hackathon List 2024-2025 (GitHub)",
      url: "https://github.com/amahjoor/Hackathons",
    },
  ],

  ai_tools: [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com/",
    },
    {
      name: "DALL·E 3 (AI Image Generator)",
      url: "https://openai.com/dall-e",
    },
    {
      name: "Runway ML (Video & Image Gen)",
      url: "https://runwayml.com/",
    },
    {
      name: "DeepL Translator",
      url: "https://www.deepl.com/translator",
    },
    {
      name: "Codeium (AI Code Assistant)",
      url: "https://codeium.com/",
    },
    {
      name: "Copy.ai (AI Writing Tool)",
      url: "https://www.copy.ai/",
    },
    {
      name: "Synthesia (AI Video Creator)",
      url: "https://www.synthesia.io/",
    },
    {
      name: "Lumen5 (AI Video Generator)",
      url: "https://www.lumen5.com/",
    },
    {
      name: "Descript (AI Podcast & Video Editing)",
      url: "https://www.descript.com/",
    },
    {
      name: "MidJourney (AI Art Generator)",
      url: "https://www.midjourney.com/",
    },
    {
      name: "Claude 3 (Anthropic)",
      url: "https://claude.ai/",
    },
    {
      name: "Jasper AI (Content Writing)",
      url: "https://www.jasper.ai/",
    },
    {
      name: "Notion AI (Productivity Assistant)",
      url: "https://www.notion.so/product/ai",
    },
    {
      name: "Otter.ai (Meeting Transcription)",
      url: "https://otter.ai/",
    },
    {
      name: "GrammarlyGO (AI Writing Assistant)",
      url: "https://www.grammarly.com/grammarlygo",
    },
    {
      name: "Canva Magic Studio (Design Tools)",
      url: "https://www.canva.com/magic-studio/",
    },
    {
      name: "Hugging Face Transformers (Open-Source Models)",
      url: "https://huggingface.co/models",
    },
    {
      name: "Grok by xAI (Chatbot & Image Gen)",
      url: "https://x.ai/",
    },
    {
      name: "Kimi by Moonshot AI (Multimodal Assistant)",
      url: "https://kimi.moonshot.cn/",
    },
    {
      name: "Nova by Amazon (Voice & Video AI)",
      url: "https://aws.amazon.com/bedrock/",
    },
    {
      name: "Gemini 2.5 (Google AI)",
      url: "https://deepmind.google/technologies/gemini/",
    },
    {
      name: "LLaMA 4 (Meta AI)",
      url: "https://ai.meta.com/llama/",
    },
    {
      name: "Zapier AI (Workflow Automation)",
      url: "https://zapier.com/blog/best-ai-productivity-tools/",
    },
    {
      name: "HyperWrite (AI Writing & Autocomplete)",
      url: "https://www.hyperwriteai.com/",
    },
    {
      name: "Pictory AI (Video Summarization)",
      url: "https://pictory.ai/",
    },
    {
      name: "Tome AI (AI-Powered Presentations)",
      url: "https://tome.app/",
    },
    {
      name: "Taskade AI (Team Productivity)",
      url: "https://www.taskade.com/",
    },
    {
      name: "DataRobot (Enterprise ML Platform)",
      url: "https://www.datarobot.com/",
    },
    {
      name: "MLflow (Open-Source MLOps)",
      url: "https://mlflow.org/",
    },
    {
      name: "TensorFlow Extended (TFX)",
      url: "https://www.tensorflow.org/tfx",
    },
  ],

  project_ideas: [
    {
      name: "Awesome Python Projects",
      url: "https://github.com/vinta/awesome-python",
    },
    {
      name: "Top 15 Python Projects with Source Code (2025)",
      url: "https://www.bosscoderacademy.com/blog/python-projects-ideas-source-code",
    },
    {
      name: "Web Development Project Ideas (2025)",
      url: "https://www.fynd.academy/blog/web-development-project",
    },
    {
      name: "Top 50 Machine Learning Projects with Source Code (2025)",
      url: "https://www.projectpro.io/article/top-10-machine-learning-projects-for-beginners-in-2021/397",
    },
    {
      name: "Data Science Project Ideas with Source Code",
      url: "https://www.interviewquery.com/p/data-science-projects-with-source-code",
    },
    {
      name: "React.js Project Examples",
      url: "https://reactjs.org/community/examples.html",
    },
    {
      name: "AI/ML Project Ideas for Beginners",
      url: "https://www.analyticsvidhya.com/blog/2021/06/15-interesting-machine-learning-project-ideas-for-beginners/",
    },
    {
      name: "Top 22 Cloud Computing Project Ideas (2025)",
      url: "https://www.knowledgehut.com/blog/cloud-computing/cloud-computing-project-ideas",
    },
    {
      name: "IoT Project Ideas",
      url: "https://www.electronicwings.com/iot-projects",
    },
    {
      name: "Blockchain Project Ideas",
      url: "https://www.blockchain-council.org/blockchain/top-10-blockchain-projects-ideas/",
    },
    {
      name: "Cybersecurity Project Ideas",
      url: "https://www.geeksforgeeks.org/cybersecurity-project-ideas/",
    },
    {
      name: "Game Development Project Ideas",
      url: "https://www.gamedesigning.org/learn/video-game-ideas/",
    },
    {
      name: "Top 10 Full Stack Project Ideas (2025)",
      url: "https://www.wscubetech.com/blog/full-stack-project-ideas/",
    },
    {
      name: "Backend Project Ideas with Source Code",
      url: "https://www.fynd.academy/blog/backend-project-ideas",
    },
    {
      name: "Top Downloaded Projects Source Code (2025)",
      url: "https://www.kashipara.com/project/",
    },
    {
      name: "Best Raspberry Pi Projects: March 2025",
      url: "https://www.tomshardware.com/features/best-raspberry-pi-projects",
    },
    {
      name: "Common Hackathon Projects",
      url: "https://github.com/mdnahian/Common-Hackathon-Projects",
    },
    {
      name: "20 Machine Learning Projects That Will Get You Hired",
      url: "https://www.kaggle.com/general/267391",
    },
    {
      name: "120 Data Science Projects with Source Code",
      url: "https://www.kaggle.com/general/240685",
    },
  ],

  dsa_materials: [
    {
      name: "LeetCode DSA Practice",
      url: "https://leetcode.com/",
    },
    {
      name: "GeeksforGeeks DSA Guide",
      url: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      name: "HackerRank DSA",
      url: "https://www.hackerrank.com/domains/tutorials/10-days-of-algorithms",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      name: "TopCoder DSA",
      url: "https://www.topcoder.com/thrive/tracks?track=Competitive%20Programming",
    },
    {
      name: "CS50 Data Structures",
      url: "https://cs50.harvard.edu/ai/2020/weeks/0/",
    },
    {
      name: "NeetCode DSA Roadmap",
      url: "https://neetcode.io/",
    },
    {
      name: "InterviewBit DSA",
      url: "https://www.interviewbit.com/courses/programming/",
    },
    {
      name: "Striver’s DSA Sheet",
      url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    },
    {
      name: "Data Structures Visualization",
      url: "https://visualgo.net/en",
    },
    {
      name: "Coursera DSA Courses",
      url: "https://www.coursera.org/courses?query=data%20structures%20and%20algorithms",
    },
    {
      name: "Roadmap.sh DSA Roadmap",
      url: "https://roadmap.sh/datastructures-and-algorithms",
    },
    {
      name: "Cracking the Coding Interview",
      url: "https://www.internship-playbook.com/app/modules/best-resources-for-data-structures-algorithms",
    },
    {
      name: "Khan Academy Algorithms",
      url: "https://www.khanacademy.org/computing/computer-science/algorithms",
    },
    {
      name: "The Art of Computer Programming",
      url: "https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming",
    },
  ],
};

const LinksPage = ({ type }) => {
  const navigate = useNavigate();
  const links = linksData[type] || [];

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="links-page">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Resources</h2>
      <ul className="links-container">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="back-button" onClick={() => navigate("/resources")}>
        🔙 Back to Resources
      </button>
    </div>
  );
};

export default LinksPage;
