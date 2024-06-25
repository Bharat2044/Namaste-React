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

    console.log("UserClass (Child) Constructor Called");
  }

  // componentDidMount is called after the component is rendered
  componentDidMount() {
    console.log("UserClass (Child) Component Did Mount Called");
  }

  // componentDidUpdate is called after the component is updated
  componentDidUpdate() {
    console.log("UserClass (Child) Component Did Update Called");
  }

  // componentWillUnmount is called before the component is removed from the DOM
  componentWillUnmount() {
    console.log("UserClass (Child) Component Will Unmount Called");
  }

  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;

    console.log("UserClass (Child) Render Method Called");

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


/**
In React, when you extend a Component class and implement a constructor, it's mandatory to call super(props) before any other statements. 
This is because:

Inheritance: The constructor of the parent class (Component) needs to be called to ensure that the component is set up properly. 
If you don't call super(props), this won't be defined, and you'll encounter an error.

Accessing props: Calling super(props) allows you to access this.props in the constructor. 
If you don't pass props to super, this.props will be undefined.
*/

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
