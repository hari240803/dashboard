import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";
import "../styles/signin.css";
import { useState } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = (e) => {
    e.preventDefault(); 
    navigate("/"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Welcome!</h1>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={24} color="white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} color="white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} color="white" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} color="white" />
          </a>
        </div>
      </div>
      <div className="auth-right">
        <h2>Register</h2>
        <p>Create your account</p>
        <form className="auth-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link to="/">Sign in here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
