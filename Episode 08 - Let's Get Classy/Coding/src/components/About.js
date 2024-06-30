import { useState } from "react";
import React from "react";
import burgerImage from "../../../../public/images/burger-image.png";
import "../styles/About.css";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  
  constructor(props) {
    super(props); // Call the super constructor with props

    // Initialize the state of the component
    this.state = {
      showUser: false,
    };

    // console.log("Parent - AboutClass constructor() Called");
  }

  componentDidMount() {
    // console.log("Parent - AboutClass componentDidMount() Called");
  }

  componentDidUpdate() {
    // console.log("Parent - AboutClass componentDidUpdate() Called");
  }
  
  componentWillUnmount() {
    // console.log("Parent - AboutClass componentWillUnmount() Called");
  }

  toggleUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };
  
  render() {
    // console.log("Parent - AboutClass render() Method Called");

    return (
      <div className="about-container">
        <div className="show-profile">
          {
            <button className="user-btn" onClickCapture={this.toggleUser}>
              {this.state.showUser ? "Hide User" : "Show User"}
            </button>
          }
          {/* {this.state.showUser && <User />} */}
          {this.state.showUser && <UserClass />} 
        </div>

        <div className="about">
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>
              "Better you will feel if you eat a Tasty<span>Trails</span>{" "}
              healthy meal"
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



// class About extends React.Component {
//   /**
//    * Constructor is the first method that is called when an instance of a class is created
//    * It is used to initialize the state of the component
//    * It is also used to bind the event handlers
//    * @param {object} props - The props object is the properties passed to the component
//    */
//   constructor(props) {
//     super(props); // Call the super constructor with props

//     // Initialize the state of the component
//     this.state = {
//       showUser: false,
//     };

//     console.log("Parent - AboutClass constructor() Called");
//   }

//   /**
//    * componentDidMount is called after the component is rendered
//    * It is used to make API calls, set up subscriptions, or initialize data
//    */
//   componentDidMount() {
//     console.log("Parent - AboutClass componentDidMount() Called");
//   }

//   /**
//    * This phase is called the Updating Phase, where the component is being re-rendered due to changes in props or state.
//    * The shouldComponentUpdate method is called before the render method is called.
//    * The shouldComponentUpdate method is called before the component is updated.
//    */
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Parent - AboutClass shouldComponentUpdate() Called");
//     console.log("Next Props: ", nextProps);
//     console.log("Next State: ", nextState);
//     console.log("Current Props: ", this.props);
//     console.log("Current State: ", this.state);
//     return true;
//   }

//   /**
//    * componentDidUpdate is called after the component is updated
//    * It is used to perform DOM operations or make API calls based on the changes
//    */
//   componentDidUpdate() {
//     console.log("Parent - AboutClass componentDidUpdate() Called");
//   }

//   /**
//    * This phase is called the Unmounting Phase, where the component is being removed from the DOM.
//    * The componentWillUnmount method is called before the component is removed from the tree.
//    * The componentWillUnmount method is called before the component is unmounted (removed from the tree).
//    *
//    * It is used to perform cleanup operations like clearing timers or subscriptions
//    */
//   componentWillUnmount() {
//     console.log("Parent - AboutClass componentWillUnmount() Called");
//   }

//   toggleUser = () => {
//     this.setState({ showUser: !this.state.showUser });
//   };

//   /**
//    * render method is called to render the JSX
//    * It is a required method in class components
//    * It returns the JSX of the component
//    */
//   render() {
//     console.log("Parent - AboutClass render() Method Called");

//     return (
//       <div className="about-container">
//         <div className="show-profile">
//           {
//             <button className="user-btn" onClickCapture={this.toggleUser}>
//               {this.state.showUser ? "Hide User" : "Show User"}
//             </button>
//           }
//           {this.state.showUser && <User name={"Bharat Kumar"} location={"Bihar"} />}
//           {this.state.showUser && <UserClass name={"Bharat Kumar"} location={"Bihar"} />}
//         </div>

//         <div className="about">
//           <div className="about-left">
//             <h1>
//               Welcome to <br /> The world of <br />{" "}
//               <span>Tasty & Fresh Food</span>
//             </h1>
//             <h4>
//               "Better you will feel if you eat a Tasty<span>Trails</span>{" "}
//               healthy meal"
//             </h4>
//           </div>
//           <div className="about-right">
//             <img src={burgerImage} alt="Food Image" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default About;

/**
- About(Parent) Constructor
- About(Parent) Render

  - First(UserClass - Child) Constructor
  - First(UserClass - Child) Render

  - Second(UserClass - Child) Constructor
  - Second(UserClass - Child) Render

  <DOM UPDATED - IN SINGLE BATCH>
  - First(UserClass - Child) componentDidMount
  - Second(UserClass - Child) componentDidMount

- About(Parent) componentDidMount
 */


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
