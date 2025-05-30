// ProfileInfoForm.js
import React, { useState } from 'react';
import './ProfileInfo.css'; // Assuming you have some styles for this component
function ProfileInfo({ onNext, onBack }) {
  const [form, setForm] = useState({ name: '', bio: '', location: '', moq: '', interests: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="screen dark">
      <button onClick={onBack}>←</button>
      <h2>Profile Information</h2>
      <input type="text" name="name" placeholder="User Name" onChange={handleChange} />
      <textarea name="bio" placeholder="Bio" onChange={handleChange}></textarea>
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <input type="text" name="moq" placeholder="MOQ" onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" onChange={handleChange} />
      <button onClick={onNext}>Continue</button>
    </div>
  );
}

export default ProfileInfo;