import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tastyTrailsLogo from "../../../../public/images/tasty-trails-logo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={tastyTrailsLogo} alt="Tasty Trails Logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-links">
            <FaCartArrowDown />
          </li>

          {isLoggedIn ? (
            <button className="login" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className="login" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
