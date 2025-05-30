// OtpVerification.js
import React, { useState } from 'react';
import './VerifyOtp.css'; // Assuming you have some styles for this component
function VerifyOtp({ phone, onNext, onBack }) {
  const [otp, setOtp] = useState('');

  return (
    <div className="screen dark">
      <button onClick={onBack}>←</button>
      <h2>Verify OTP</h2>
      <p>We've sent a code to {phone}</p>
      <input type="text" maxLength="4" value={otp} onChange={e => setOtp(e.target.value)} />
      <button onClick={onNext}>Verify OTP</button>
    </div>
  );
}

export default VerifyOtp;