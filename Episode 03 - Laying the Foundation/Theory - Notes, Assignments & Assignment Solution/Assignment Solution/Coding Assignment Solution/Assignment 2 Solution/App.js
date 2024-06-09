import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./images/logo.jpg";
import searchIcon from './images/search_icon.png';
import userIcon from './images/user_icon.webp';


/*
Create a Header Component from scratch using Functional Component with JSX
    Add a Logo on Left
    Add a search bar in middle
    Add User icon on right
    Add CSS to make it look nice
 */

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />

        <div className="search-bar">
          <input            
            type="text"
            placeholder="Search anything you want..."
          />  
          <img className="search-icon" src={searchIcon} alt="search icon" />   
        </div>
        
        <img className="user-icon" src={userIcon} alt="user icon" />
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
