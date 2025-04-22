import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";
import Character from "../components/Login/Character";
import "../assets/styles/login.css";

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  return (
    <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
      <SignupForm />
      <LoginForm />

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <Character id="leftCharacter" />
            <h1>Welcome Back!</h1>
            <p>Already have an account? Sign in to continue coding!</p>
            <button className="ghost" onClick={() => setIsSignUpActive(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <Character id="rightCharacter" />
            <h1>Hello, Coder!</h1>
            <p>Join BruhDive and start your coding journey today!</p>
            <button className="ghost" onClick={() => setIsSignUpActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
