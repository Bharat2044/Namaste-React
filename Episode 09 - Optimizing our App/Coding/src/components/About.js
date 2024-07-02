import { useState } from "react";
import React from "react";
import burgerImage from "../../../../public/images/burger-image.png";
import "../styles/About.css";
import ProfileClass from "./ProfileClass";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="about-container">
      <div className="show-profile">
        {
          <button className="user-btn" onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? "Hide My Profile" : "Show My Profile"}
          </button>
        }
        {showProfile && <ProfileClass name={"Bharat Kumar"} location={"Bihar"} />}
      </div>

      <div className="about">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Tasty<span>Trails</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={burgerImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
