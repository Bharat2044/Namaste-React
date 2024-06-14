import burgerImage from "../../../../../../public/images/burger-image.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
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
  );
};

export default About;
