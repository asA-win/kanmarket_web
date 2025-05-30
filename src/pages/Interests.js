// InterestsForm.js
import React, { useState } from 'react';
import './Interests.css'; // Assuming you have some styles for this component

const allTags = ["Entrepreneurship", "Shoes", "Kerala", "Self-care", "Cars", "Churidar material", "Accessories", "Clothing", "Cleaning", "Toys", "Hot-Wheels", "Machine-Tools"];

function Interests({ onBack }) {
  const [selected, setSelected] = useState([]);

  const toggleTag = (tag) => {
    if (selected.includes(tag)) setSelected(selected.filter(t => t !== tag));
    else if (selected.length < 8) setSelected([...selected, tag]);
  };

  return (
    <div className="screen dark">
      <button onClick={onBack}>←</button>
      <h2>Interests</h2>
      <input type="text" placeholder="Search interests" />
      <div className="tags">
        {allTags.map(tag => (
          <button
            key={tag}
            className={selected.includes(tag) ? 'selected' : ''}
            onClick={() => toggleTag(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <button disabled={selected.length === 0}>Continue ({selected.length}/8)</button>
    </div>
  );
}

export default Interests;