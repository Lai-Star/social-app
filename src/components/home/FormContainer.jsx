import React, { useState } from 'react';
import './SignUp.css';

const FormContainer = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
          <button className="submit" type="button">
            Sign In
          </button>

          <div className="social-media">
            <ul>
              <li>
                <img src="images/facebook.png" alt="Facebook" />
              </li>
              <li>
                <img src="images/twitter.png" alt="Twitter" />
              </li>
              <li>
                <img src="images/linkedin.png" alt="LinkedIn" />
              </li>
              <li>
                <img src="images/instagram.png" alt="Instagram" />
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
            <button type="button" className="submit">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
