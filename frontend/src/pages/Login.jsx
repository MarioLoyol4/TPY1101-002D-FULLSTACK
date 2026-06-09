import React from 'react';
import '../styles/Login.css';
import heroImg from '../assets/logo.png';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="logo-section">
          <img src={heroImg} alt="Sistema" className="logo-image" />
        </div>

        <div className="form-section">

          <h2 className="login-title">USER LOGIN</h2>

          <div className="input-group">
            <div className="icon-wrapper">
              <span>👤</span>
            </div>

            <input
              type="text"
              placeholder="Username"
              className="login-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />

            <div className="icon-wrapper">
              <span>🔒</span>
            </div>
          </div>

          <button className="login-button">
            LOGIN
          </button>

        </div>

      </div>
    </div>
  );
};

export default Login;