import { Component } from "react";
import {GITHUB_USER_API, GITHUB_USERNAME} from "../../../../public/common/constants";
import "../styles/User.css";

class UserClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props

    // console.log(props);
    // console.log("Child - UserClass constructor() Called");

    // Initialize the state of the component
    this.state = {
      userInfo: {
        name: "Bharat Kumar",
        location: "Bihar, India",
        avatar_url: "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg",
      }
    };
  }

  async getUserInfo() {
    try {
      const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
      const json = await response.json();
      
      // console.log(json);

      this.setState({
        userInfo: json
      });
    } catch (error) {
      console.error("Error while fetching user data: ", error);
    }
  }

  componentDidMount() {
    // console.log("Child - UserClass componentDidMount() Called");

    // this.timer = setInterval(() => {
    //   console.log("setInterval Called - Namaste React OP");
    // }, 1000);

    // API Calls (Fetch Data)
    this.getUserInfo();
  }

  componentDidUpdate() {
    // console.log("Child - UserClass componentDidUpdate() Called");
  }

  componentWillUnmount() {
    // console.log("Child - UserClass componentWillUnmount() Called");

    // clearInterval(this.timer);
  }

  render() {
    // console.log("Child - UserClass render() Method Called");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
        <div className="profile-container">
          <div className="left-profile">
            <h1>About Me</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <img className="profile-pic" src={avatar_url} alt="User Avatar" />
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
  }
}

export default UserClass;

/**
 * --- Mounting Phase ---
 * Constructor (Dummy Data)
 * Render (Dummy Data)
 *    <HTML (Dummy Data)>
 * ComponentDidMount
 *    <API Call>
 *    <this.setState> -> State variable is updated
 * 
 * --- Updating Phase ---
 * Render(API Data)
 *    <HTML (New API Data)>
 * ComponentDidUpdate
 * 
 */


// import { Component } from "react";
// import "../styles/User.css";

// class UserClass extends Component {
//   constructor(props) {
//     super(props); // Call the super constructor with props
//     // console.log(props);

//     // Initialize the state of the component
//     this.state = {
//       count1: 0,
//       count2: 0,
//     };

//     console.log(this.props.name + " Child - UserClass constructor() Called");
//   }

//   componentDidMount() {
//     console.log(
//       this.props.name + " Child - UserClass componentDidMount() Called"
//     );

//     // API Call (Fetch Data)
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(
//       this.props.name + " Child - UserClass shouldComponentUpdate() Called"
//     );
//     console.log("Next Props: ", nextProps);
//     console.log("Next State: ", nextState);
//     console.log("Current Props: ", this.props);
//     console.log("Current State: ", this.state);

//     if (nextState.count1 > 10) {
//       return false;
//     }

//     return true;
//   }

//   // componentDidUpdate() {}
//   componentDidUpdate(prevProps, prevState) {
//     console.log(
//       this.props.name + " Child - UserClass componentDidUpdate() Called"
//     );
//     console.log("Previous Props: ", prevProps);
//     console.log("Previous State: ", prevState);
//     console.log("Current Props: ", this.props);
//     console.log("Current State: ", this.state);
//   }

//   // componentWillUnmount is called before the component is removed from the DOM
//   componentWillUnmount() {
//     console.log(
//       this.props.name + " Child - UserClass componentWillUnmount() Called"
//     );
//   }

//   render() {
//     console.log(this.props.name + " Child - UserClass render() Method Called");

//     const { name, location } = this.props;
//     const { count1, count2 } = this.state;

//     return (
//       <div id="profile">
//         <h1>UserClass Component</h1>
//         <div className="profile-container">
//           <div className="left-profile">
//             <h1>About Me</h1>
//             <h2>Count 1: {count1}</h2>
//             <h2>Count 2: {count2}</h2>
//             <button
//               onClick={() => {
//                 this.setState({
//                   // count1: this.state.count1 - 1
//                   count1: count1 - 1,
//                   count2: count2 - 1,
//                 });
//               }}
//             >
//               Decrease Count
//             </button>
//             <button
//               onClick={() => {
//                 this.setState({ count1: count1 + 1, count2: count2 + 1 });
//               }}
//             >
//               Increase Count
//             </button>
//             <h2>Name: {name}</h2>
//             <h2>Location: {location}</h2>
//             <h2>Contact: Bharat2044</h2>
//           </div>

//           <div className="right-profile">
//             <h1>My Skills</h1>
//             <ul>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>JavaScript</li>
//               <li>React</li>
//               <li>Node</li>
//               <li>MongoDB</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserClass;

/**
 * Constructor is the first method that is called when an instance of a class is created
 * It is used to initialize the state of the component
 * It is also used to bind the event handlers
 * @param {object} props - The props object is the properties passed to the component
 *
 * This phase is called the Mounting Phase / Loading Phase, where the component is being created and inserted into the DOM.
 * The constructor is called only once in the lifecycle of a component.
 * The constructor is the right place to initialize the state of the component.
 */

/**
 * componentDidMount is called after the component is rendered
 * It is used to make API calls, set up subscriptions, or initialize data
 * In functional components, useEffect with an empty dependency array can be used to achieve similar behavior.
 *
 * This phase is called the Mounting Phase / Loading Phase, where the component is being created and inserted into the DOM.
 * The componentDidMount method is called only once in the lifecycle of a component.
 * The componentDidMount method is the right place to make API calls, set up subscriptions, or initialize data.
 *
 * componentDidMount is called after the render method is called
 * componentDidMount is called after the component is mounted (inserted into the tree)
 * Both the constructor and componentDidMount methods are part of the mounting phase, but they occur at different points within this phase.
 */

/**
 * shouldComponentUpdate is called before the component is updated
 * It is used to determine if the component should re-render
 * In functional components, React.memo can be used to achieve similar behavior.
 *
 * This phase is called the Updating Phase, where the component is being re-rendered due to changes in props or state.
 * The shouldComponentUpdate method is called before the render method is called.
 * The shouldComponentUpdate method is called before the component is updated.
 * The shouldComponentUpdate method is called before the component is re-rendered.
 * The shouldComponentUpdate method is called before the changes are flushed to the DOM.
 * The shouldComponentUpdate method is called before the component is mounted (inserted into the tree).
 */

/**
 * componentDidUpdate is called after the component is updated
 * It is used to perform updates after the component is rendered
 * In functional components, useEffect with a dependency array can be used to achieve similar behavior.
 *
 * This phase is called the Updating Phase, where the component is being re-rendered due to changes in props or state.
 * The componentDidUpdate method is called after the render method is called.
 * The componentDidUpdate method is called after the component is updated.
 * The componentDidUpdate method is called after the component is re-rendered.
 * The componentDidUpdate method is called after the changes have been flushed to the DOM.
 * The componentDidUpdate method is called after the component is mounted (inserted into the tree).
 */

/**
 * componentWillUnmount is called before the component is removed from the DOM
 * It is used to perform cleanup before the component is removed
 * In functional components, useEffect with a cleanup function can be used to achieve similar behavior.
 *
 * This phase is called the Unmounting Phase, where the component is being removed from the DOM.
 * The componentWillUnmount method is called only once in the lifecycle of a component.
 * The componentWillUnmount method is the right place to perform cleanup before the component is removed.
 * The componentWillUnmount method is called before the component is removed from the DOM.
 * The componentWillUnmount method is called before the component is unmounted (removed from the tree).
 */

/**
 * render method returns the JSX of the component
 * It is a required method in class components
 * It is used to display the content of the component
 *
 * This phase is called the Mounting Phase / Loading Phase, where the component is being created and inserted into the DOM.
 * The render method is called every time the component is updated.
 *
 * The render method is called after the constructor method.
 * The render method is called after the componentDidMount method.
 * The render method is called after the shouldComponentUpdate method.
 * The render method is called after the componentDidUpdate method.
 * The render method is called after the component is mounted (inserted into the tree).
 * The render method is called after the component is updated.
 * The render method is called after the component is re-rendered.
 * The render method is called after the changes are flushed to the DOM.
 *
 * @returns {JSX.Element} JSX
 */
