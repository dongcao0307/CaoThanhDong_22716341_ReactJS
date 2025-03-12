import React from "react";
import { FaBars } from "react-icons/fa";
import "../App.css"; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaBars className="menu-icon" />
        <h2>FILTERS</h2>
      </div>

      {/* Type Filter */}
      <div className="filter-section">
        <h3>Type</h3>
        <div className="filter-options">
          <label><input type="checkbox" /> Pan-fried</label>
          <label><input type="checkbox" checked readOnly /> Grilled</label>
          <label><input type="checkbox" checked readOnly /> Roasted</label>
          <label><input type="checkbox" /> Sauteed</label>
          <label><input type="checkbox" /> Baked</label>
          <label><input type="checkbox" /> Steamed</label>
          <label><input type="checkbox" /> Stewed</label>
        </div>
      </div>

      {/* Time Filter */}
      <div className="filter-section">
        <h3>Time</h3>
        <div className="slider-container">
          <span>30 minutes</span>
          <input type="range" min="30" max="50" />
          <span>50 minutes</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <h3>Rating</h3>
        <div className="rating-container">
          <label><input type="checkbox" /><span>⭐⭐⭐⭐⭐</span></label>
          <label><input type="checkbox" checked readOnly /><span>⭐⭐⭐⭐☆</span></label>
          <label><input type="checkbox" checked readOnly /><span>⭐⭐⭐☆☆</span></label>
          <label><input type="checkbox" checked readOnly /><span>⭐⭐☆☆☆</span></label>
          <label><input type="checkbox" /><span>⭐☆☆☆☆</span></label>
        </div>
      </div>

      {/* Apply Button */}
      <button className="apply-btn">Apply</button>
    </aside>
  );
};

export default Sidebar;
