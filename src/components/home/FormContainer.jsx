import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FormContainer = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/job-posting');
  };
  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={`cont ${isSignup ? 's-signup' : ''}`}>
      <div className="form sign-in">
        <h2>Sign In</h2>
        <label>
          <span>Email Address</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button className="submit" type="button" onClick={handleLoginClick}>
          Sign In
        </button>

        <div className="social-media">
          <ul>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-200 m-2"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition duration-200 m-2"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-700 transition duration-200 m-2"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-600 transition duration-200 m-2"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-cont">
        <div className="img">
          <div className="img-text m-up">
            <h1>New here?</h1>
            <p>Sign up and discover</p>
          </div>
          <div className="img-text m-in">
            <h1>One of us?</h1>
            <p>Just sign in</p>
          </div>
          <div className="img-btn" onClick={handleToggle}>
            <span className="m-up">Sign Up</span>
            <span className="m-in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Sign Up</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" />
          </label>
          <button type="button" className="submit" onClick={handleLoginClick}>
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
