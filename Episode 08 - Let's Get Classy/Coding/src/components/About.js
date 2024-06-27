import { useState } from "react";
import React from "react";
import burgerImage from "../../../../public/images/burger-image.png";
import "../styles/About.css";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  // Constructor is the first method that is called when an instance of a class is created
  constructor(props) {
    super(props); // Call the super constructor with props

    // Initialize the state of the component
    this.state = {
      showUser: false,
    };

    console.log("About Class (Parent) Constructor Called");
  }

  // componentDidMount is called after the component is rendered
  // It is used to make API calls, set up subscriptions, or initialize data
  componentDidMount() {
    console.log("About Class (Parent) Component Did Mount Called");
  }

  // componentDidUpdate is called after the component is updated
  componentDidUpdate() {
    console.log("About Class (Parent) Component Did Update Called");
  }

  // componentWillUnmount is called before the component is removed from the DOM
  componentWillUnmount() {
    console.log("About Class (Parent) Component Will Unmount Called");
  }

  toggleUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };

  // render method is called to render the JSX
  render() {
    console.log("About Class (Parent) Render Method Called");

    return (
      <div className="about-container">
        <div className="show-profile">
          {
            <button className="user-btn" onClickCapture={this.toggleUser}>
              {this.state.showUser ? "Hide User" : "Show User"}
            </button>
          }
          {this.state.showUser && <User name={"Bharat Kumar"} location={"Bihar"} />}
          {this.state.showUser && <UserClass name={"Bharat Kumar"} location={"Bihar"} />}
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
  }
}

export default About;


// const About = () => {
//   const [showUser, setShowUser] = useState(false);

//   return (
//     <div className="about-container">
//       <div className="show-profile">
//         {
//           <button className="user-btn" onClick={() => setShowUser(!showUser)}>
//             {showUser ? "Hide User" : "Show User"}
//           </button>
//         }
//         {showUser && <User name={"Bharat Kumar"} location={"Bihar"} />}
//         {showUser && <UserClass name={"Bharat Kumar"} location={"Bihar"} />}
//       </div>

//       <div className="about">
//         <div className="about-left">
//           <h1>
//             Welcome to <br /> The world of <br />{" "}
//             <span>Tasty & Fresh Food</span>
//           </h1>
//           <h4>
//             "Better you will feel if you eat a Tasty<span>Trails</span> healthy
//             meal"
//           </h4>
//         </div>
//         <div className="about-right">
//           <img src={burgerImage} alt="Food Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

