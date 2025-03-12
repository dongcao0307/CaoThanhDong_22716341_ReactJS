import React from "react";
import "../App.css";
import saladData from "../data/salads"; 
import { FaRegBookmark } from "react-icons/fa";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="main-header">
        <h2>Salad (32)</h2>
        <select className="sort-dropdown">
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

    
      <div className="salad-grid">
        {saladData.map((salad, index) => (
          <div className="salad-card" key={index}>
            <img src={salad.image} alt={salad.name} className="salad-image" />
            <div className="salad-info">
              <h3 className="salad-name">{salad.name}</h3>
              <div className="salad-footer">
                <span className="salad-time">{salad.time} minutes</span>
                <FaRegBookmark className="bookmark-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="pagination">
        <button className="page-btn">&laquo;</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">...</button>
        <button className="page-btn">10</button>
        <button className="page-btn">&raquo;</button>
      </div>
    </main>
  );
};

export default MainContent;
