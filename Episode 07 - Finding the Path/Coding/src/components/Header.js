import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tastyTrailsLogo from "../../../../public/images/tasty-trails-logo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If no dependency array([]) is provided => useEffect will run after every render cycle
  // If dependency array([]) is empty => useEffect will run only once after the initial render
  // If dependency array is provided => useEffect will run after every render cycle if any of the dependencies change
  // useEffect(() => {
  //   console.log("Login Logout State Changed");
  // }, [isLoggedIn]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={tastyTrailsLogo} alt="Tasty Trails Logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link className="nav-links" to="/">Home</Link></li>
          <li><Link className="nav-links" to="/about">About</Link></li>
          <li><Link className="nav-links" to="/contact">Contact</Link></li>
          <li><Link className="nav-links"><FaCartArrowDown /></Link></li>
          <button
            className="login"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
