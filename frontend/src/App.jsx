import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import About from "./components/About/About";
import ContactPage from "./components/ContactPage/ContactPage";
import Quiz from "./components/quiz/Quiz";
import Footer from "./components/Footer/Footer";
import ResourcesCard from "./components/resources/ResourceCard";
import Feedback from "./components/Feedback/Feedback";
import PythonQuiz from "./components/QuizLanguages/PyQuizz/PythonQuiz";
import LinkPage from "./components/resources/LinkPage";
import PyResults from "./components/QuizLanguages/PyQuizz/QuizComponents/PyResults";
import ViewResults from "./components/ViewResults/ViewResults";
import JavascriptQuiz from "./components/QuizLanguages/JsQuizz/JavascriptQuiz";
import JsResults from "./components/QuizLanguages/JsQuizz/QuizComponents/JsResults";
import JavaQuiz from "./components/QuizLanguages/JavaQuizz/JavaQuiz";
import JavaResults from "./components/QuizLanguages/JavaQuizz/QuizComponents/JavaResults";
import CppQuiz from "./components/QuizLanguages/CppQuizz/CppQuiz";
import CppResults from "./components/QuizLanguages/CppQuizz/QuizComponents/CppResults";
import PhpQuiz from "./components/QuizLanguages/PhpQuizz/PhpQuiz";
import PhpResults from "./components/QuizLanguages/PhpQuizz/QuizComponents/PhpResults";
import SqlQuiz from "./components/QuizLanguages/SqlQuizz/SqlQuiz";
import SqlResults from "./components/QuizLanguages/SqlQuizz/QuizComponents/SqlResults";
import CQuiz from "./components/QuizLanguages/CQuizz/CQuiz";
import CResults from "./components/QuizLanguages/CQuizz/QuizComponents/CResults";
import CsharpQuiz from "./components/QuizLanguages/CsharpQuizz/CsharpQuiz";
import CsharpResults from "./components/QuizLanguages/CsharpQuizz/QuizComponents/CsharpResults";
import KotlinQuiz from "./components/QuizLanguages/kotlinQuizz/KotlinQuiz";
import KotlinResults from "./components/QuizLanguages/kotlinQuizz/QuizComponents/KotlinResults";

import CareerGuide from "./components/QuizLanguages/CareerGuide/QuizPage";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const aboutRef = useRef(null);
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    navigate("/");
    setActiveSection("home");
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="App">
      <Navbar
        setActiveSection={setActiveSection}
        onAboutClick={handleScrollToAbout}
      />

      <main className="content">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Steps />
                <section ref={aboutRef}>
                  <About />
                </section>
                <Feedback />
              </>
            }
          />

          {/* Quiz Pages */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/python" element={<PythonQuiz />} />
          <Route path="/quiz/python/results" element={<PyResults />} />
          <Route path="/quiz/javascript" element={<JavascriptQuiz />} />
          <Route path="/quiz/javascript/results" element={<JsResults />} />
          <Route path="/quiz/java" element={<JavaQuiz />} />
          <Route path="/quiz/java/results" element={<JavaResults />} />
          <Route path="/quiz/c++" element={<CppQuiz />} />
          <Route path="/quiz/c++/results" element={<CppResults />} />
          <Route path="/quiz/php" element={<PhpQuiz />} />
          <Route path="/quiz/php/results" element={<PhpResults />} />
          <Route path="/quiz/sql" element={<SqlQuiz />} />
          <Route path="/quiz/sql/results" element={<SqlResults />} />
          <Route path="/quiz/c" element={<CQuiz />} />
          <Route path="/quiz/c/results" element={<CResults />} />
          <Route path="/quiz/csharp" element={<CsharpQuiz />} />
          <Route path="/quiz/csharp/results" element={<CsharpResults />} />
          <Route path="/quiz/kotlin" element={<KotlinQuiz />} />
          <Route path="/quiz/kotlin/results" element={<KotlinResults />} />

          <Route path="/quiz/test-yourself" element={<CareerGuide />} />

          {/* Support */}
          <Route path="/support" element={<ContactPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/feedback" element={<ContactPage />} />

          {/* Resources */}
          <Route path="/resources" element={<ResourcesCard />} />
          <Route
            path="/internships"
            element={<LinkPage type="internships" />}
          />
          <Route path="/courses" element={<LinkPage type="courses" />} />
          <Route path="/roadmaps" element={<LinkPage type="roadmaps" />} />
          <Route path="/hackathons" element={<LinkPage type="hackathons" />} />
          <Route
            path="/certifications"
            element={<LinkPage type="certifications" />}
          />
          <Route path="/ai-tools" element={<LinkPage type="ai_tools" />} />
          <Route
            path="/project-ideas"
            element={<LinkPage type="project_ideas" />}
          />
          <Route
            path="/dsa-materials"
            element={<LinkPage type="dsa_materials" />}
          />

          {/* View all quiz results */}
          <Route path="/results" element={<ViewResults />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
