import { useState } from "react";
import React from "react";
import burgerImage from "../../../../../../public/images/burger-image.png";
import ProfileClass from "./ProfileClass";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="w-[90%] flex flex-col justify-center items-center flex-wrap gap-[40px]">
      <div className="flex flex-col justify-center items-center flex-wrap gap-[40px] transition-all ease-in-out delalay-[0.3s]">
        {
          <button
            className="text-white bg-[#d97919] text-[1.2rem] font-semibold py-2.5 px-5 border-none outline-none rounded-[5px] cursor-pointer hover:bg-[darkgreen] transition-all 0.3s ease-in-out"
            onClick={() => setShowProfile(!showProfile)}
          >
            {showProfile ? "Hide My Profile" : "Show My Profile"}
          </button>
        }
        {showProfile && (
          <ProfileClass name={"Bharat Kumar"} location={"Bihar"} />
        )}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-[40px] w-full">
        <div className="about-left">
          <h1 className="text-[60px] text-[#494949] font-bold leading-[70px]">
            Welcome to <br /> The world of <br />{" "}
            <span className="text-white bg-[#d97919] rounded-[15px] px-[15px] py-[5px]">
              Tasty & Fresh Food
            </span>
          </h1>
          <h4 className="text-[22px] mt-[10px] italic font-semibold">
            "Better you will feel if you eat a Tasty
            <span className="text-[#d97919]">Trails</span> healthy meal"
          </h4>
        </div>
        <div>
          <img src={burgerImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
