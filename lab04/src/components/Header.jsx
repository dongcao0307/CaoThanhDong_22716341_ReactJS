import React from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";
// import "../App.css"; 
// import logo from "../image/logo.PNG"; 
// import profilePic from "../image/avatar2.PNG"; 

const Header = () => {
  return (
    <header className="header">
      <div className="">
        <h1 className="text-pink-500">Chefify</h1>
      </div>

    
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-2 py-2 w-96 ">
            <FaSearch className="bg-gray-100 mr-3" />
            <input type="text" placeholder="Enter foodname you want to eat" className="outline-none w-96"/>
        </div>


      <nav className="nav-menu">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>


      <div className="header-actions">
        <button className="recipe-box-btn">
          <FaEnvelope className="btn-icon" /> Your Recipe Box
        </button>
        <img src={"../image/avatar2.PNG"} alt="User" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
