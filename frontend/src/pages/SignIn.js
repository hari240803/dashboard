


import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";
import "../styles/signin.css";
import { useNavigate } from "react-router-dom";


function SignIn() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignin = (e) => {
    e.preventDefault(); 
    navigate("/dashboard"); 
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
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="google-signin">
          <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" />
          Sign in with Google
        </div>
        <form className="auth-form"  onSubmit={handleSignin}>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <button type="submit" onSubmit={<Link to="/Dashboard"></Link>}>Sign In</button>
        </form>
        <div className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
