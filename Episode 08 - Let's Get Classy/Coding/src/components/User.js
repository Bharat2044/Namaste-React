import { useState } from "react";
import "../styles/User.css";

const Profile = ({ name, location }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="profile-container">
      <div className="left-profile">
        <h1>About Me</h1>
        <h2>Count 1: {count1}</h2>
        <h2>Count 2: {count2}</h2>
        <button
          onClick={() => {
            setCount1(count1 - 1);
            setCount2(count2 - 1);
          }}
        >
          Decrease Count
        </button>
        <button
          onClick={() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: Bharat2044</h2>
      </div>

      <div className="right-profile">
        <h1>My Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
