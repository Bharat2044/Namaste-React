import { useState } from "react";
import tastyTrailsLogo from "../../../../public/images/tasty-trails-logo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={tastyTrailsLogo} alt="Tasty Trails Logo" />
        </a>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <FaCartArrowDown />
          </li>
          <button className="login" onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
