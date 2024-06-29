import { Component } from "react";
import "../styles/User.css";

class UserClass extends Component {
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
  constructor(props) {
    super(props); // Call the super constructor with props
    // console.log(props);

    // Initialize the state of the component
    this.state = {
      count1: 0,
      count2: 0,
    };

    console.log("UserClass (Child) constructor() Called");
  }

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
  componentDidMount() {
    console.log("UserClass (Child) componentDidMount() Called");

    // API Call (Fetch Data)
    
  }

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
  shouldComponentUpdate(nextProps, nextState) {
    console.log("UserClass (Child) shouldComponentUpdate() Called");
    console.log("Next Props: ", nextProps);
    console.log("Next State: ", nextState);
    console.log("Current Props: ", this.props);
    console.log("Current State: ", this.state);

    if (nextState.count1 > 10) {
      return false;
    }

    return true;
  }

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
  // componentDidUpdate() {}
  componentDidUpdate(prevProps, prevState) {
    console.log("UserClass (Child) componentDidUpdate() Called");
    console.log("Previous Props: ", prevProps);
    console.log("Previous State: ", prevState);
    console.log("Current Props: ", this.props);
    console.log("Current State: ", this.state);
  }

  // componentWillUnmount is called before the component is removed from the DOM
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
  componentWillUnmount() {
    console.log("UserClass (Child) componentWillUnmount() Called");
  }

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
  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;

    console.log("UserClass (Child) render() Method Called");

    return (
      <div className="profile-container">
        <div className="left-profile">
          <h1>About Me</h1>
          <h2>Count 1: {count1}</h2>
          <h2>Count 2: {count2}</h2>
          <button
            onClick={() => {
              this.setState({
                // count1: this.state.count1 - 1
                count1: count1 - 1,
                count2: count2 - 1,
              });
            }}
          >
            Decrease Count
          </button>
          <button
            onClick={() => {
              this.setState({ count1: count1 + 1, count2: count2 + 1 });
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
  }
}

export default UserClass;

