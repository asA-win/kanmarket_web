// LoginScreen.js
import React from 'react';
import './Login.css'; // Assuming you have some styles for this component
function Login({ onNext }) {
  return (
    <div className="screen dark">
      <h2>Lorem Ipsum is simply dummy text</h2>
      <button onClick={onNext}>Login with Phone</button>
      <button>Login with Google</button>
      <button>Login with Facebook</button>
      <p>Don't have an account? <span onClick={onNext}>Sign Up</span></p>
    </div>
  );
}

export default Login;