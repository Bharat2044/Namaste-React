import { useState } from "react";
import React from "react";
import burgerImage from "../../../../public/images/burger-image.png";
import "../styles/About.css";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  /**
   * Constructor is the first method that is called when an instance of a class is created
   * It is used to initialize the state of the component
   * It is also used to bind the event handlers
   * 
   * This phase is called the Mounting Phase / Loading Phase, where the component is being created and inserted into the DOM.
   * The constructor is called only once in the lifecycle of a component.
   * The constructor is the right place to initialize the state of the component.
   * 
   * @param {object} props - The props object is the properties passed to the component
   */
  constructor(props) {
    super(props); // Call the super constructor with props

    // Initialize the state of the component
    this.state = {
      showUser: false,
    };

    console.log("About Class (Parent) Constructor Called");
  }

  // componentDidMount is called after the component is rendered
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




/**
The mounting or loading process in the UserClass component involves the lifecycle methods provided by React, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

Here is a breakdown of these methods:

1. Constructor: The constructor is called first when an instance of the component is created. 
It is used to initialize the state and bind event handlers.

2. componentDidMount: This method is called immediately after the component is mounted (inserted into the tree). 
It's a good place to set up any subscriptions, initialize data, or make network requests.

3. componentDidUpdate: This method is called after the component is updated. 
It's useful for handling operations based on changes in the state or props.

4. componentWillUnmount: This method is called just before the component is unmounted and destroyed. 
It's useful for cleaning up subscriptions, canceling network requests, or other cleanup operations.
 */
