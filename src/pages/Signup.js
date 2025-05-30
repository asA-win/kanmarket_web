// SignUpScreen.js
import React, { useState } from 'react';
import './Signup.css'; // Assuming you have some styles for this component

function Signup({ onNext, onBack }) {
  const [phone, setPhone] = useState('');

  return (
    <div className="screen dark">
      <button onClick={onBack}>←</button>
      <h2>Sign up</h2>
      <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={() => onNext(phone)}>Request OTP</button>
      <div>
        <p>Or Register with</p>
        <button>Facebook</button>
        <button>Google</button>
      </div>
    </div>
  );
}

export default Signup;