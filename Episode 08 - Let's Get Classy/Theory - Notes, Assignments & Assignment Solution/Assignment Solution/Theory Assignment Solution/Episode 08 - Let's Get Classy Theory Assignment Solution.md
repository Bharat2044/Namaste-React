# _Episode 08 - Let's Get Classy_

## Ques): How do you create `Nested Routes` react-router-dom configuration?

**Ans:** We can create a `Nested Routes` inside a react router configuration as follows:<br/>
first call createBrowserRouter for routing different pages

```js
const router = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <Parent />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/path",
        element: <Child />,
      },
    ],
  },
]);
```

Now we can create a nested routing for `/path` using `children` again as follows:

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    errorElement: <Error />,
    children: [
      {
        path: "/path",
        element: <Child />,
        children: [
          // nested routing for subchild
          {
            path: "child", // Don't use '/' because then react-router-dom will understand it's the direct path
            element: <SubChild />,
          },
        ],
      },
    ],
  },
]);
```

## Ques): Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

**Ans:** `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".<br/>
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## Ques): What is the order of life cycle method calls in `Class Based Components`?

**Ans:** Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

### For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
### For more reference [React-Lifecycle-methods](https://www.freecodecamp.org/news/react-component-lifecycle-methods/)
### For more reference [React-Lifecycle-methods-Diagram](https://medium.com/@arpitparekh54/understanding-the-react-component-lifecycle-a-deep-dive-into-the-life-of-a-react-component-74813cb8dfb5/)

## Ques): Why do we use `componentDidMount`?

**Ans:** The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). <br/>
This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.<br/>
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Ques): Why do we use `componentWillUnmount`? Show with example.

**Ans:** `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.<br/>
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Ques): (Research) Why do we use `super(props)` in constructor?

**Ans:** `super(props)` is used to inherit the properties and access variables of the React parent class when we initialize our component.<br/>
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.<br/>
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Ques): (Research) Why can't we have the `callback function` of `useEffect async`?

**Ans:** `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

<br>
<br>

# Extra Knowledge

## React Class Component Lifecycle Methods Detailed Explanation

- In React, class components have a series of lifecycle methods that you can override to run code at particular times in the process.
- In React, class components go through several lifecycle phases: mounting, updating, and unmounting.
- Each phase includes specific lifecycle methods that are called in a particular order.
- Understanding these methods and the order in which they are called is crucial for effectively managing component behavior.

### **1. Mounting Phase**

The mounting phase is when a component is created and inserted into the DOM. The methods called during this phase are:

#### **1.1 constructor(props)**

- Purpose:
  - Initializes the component's state.
  - Binds event handlers.
- Use Case:
  - Setting up initial state values.
  - Binding methods to this.

### Example:

```js
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  };
  this.handleClick = this.handleClick.bind(this);
}
```

#### **1.2 render()**

- Purpose:
  - Defines the JSX (UI) of the component.
- Use Case:
  - Creating the structure and appearance of the component.

### Example:

```js
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleClick}>Increase Count</button>
    </div>
  );
}
```

#### **1.3 componentDidMount()**

- Purpose:
  - Runs after the component has been rendered to the DOM.
- Use Case:
  - Making API calls.
  - Setting up subscriptions.
  - Initializing libraries or frameworks.

### Example:

```js
componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
```

### **2. Updating Phase**

The updating phase is when the component is re-rendered due to changes in props or state. The methods called during this phase are:

#### **2.1 shouldComponentUpdate(nextProps, nextState)**

- Purpose:
  - Determines whether the component should update.
- Use Case:
  - Optimizing performance by preventing unnecessary renders.

### Example:

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```

#### **2.2 render()**

- Purpose:
  - Same as in the mounting phase, but called again if state or props change.

### Example:

```js
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleClick}>Increase Count</button>
    </div>
  );
}
```

#### **2.3 componentDidUpdate(prevProps, prevState)**

- Purpose:
  - Runs after the component has been updated.
- Use Case:
  - Performing operations based on new state or props.
  - Fetching new data when props change.

### Example:

```js
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
  }
}
```

### **3. Unmounting Phase**

The unmounting phase is when a component is removed from the DOM. The methods called during this phase are:

#### **3.1 componentWillUnmount()**

- Purpose:
  - Runs just before the component is unmounted and destroyed.
- Use Case:
  - Cleaning up subscriptions.
  - Canceling network requests.
  - Clearing timers.

### Example:

```js
componentWillUnmount() {
  clearInterval(this.interval);
}
```

<br/>

## Summary of Lifecycle Methods Order

### **1. Mounting Phase:**

- **constructor(props):** Initializes the state and binds event handlers.
- **render():** Defines the component's UI.
- **componentDidMount():** Makes API calls, sets up subscriptions, and initializes data.

### **2. Updating Phase:**

- **shouldComponentUpdate(nextProps, nextState):** Optimizes performance by determining whether the component should update.
- **render():** Re-defines the component's UI.
- **componentDidUpdate(prevProps, prevState):** Handles operations based on new state or props.

### **3. Unmounting Phase:**

- **componentWillUnmount():** Cleans up subscriptions, cancels network requests, and clears timers.

### Example of a Complete Class Component

Here’s an example that incorporates all the lifecycle methods:

```js
import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component did mount");
    // Simulate an API call
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update");
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (this.state.count !== prevState.count) {
      console.log(
        `Count changed from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.interval);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increase Count</button>
      </div>
    );
  }
}

export default ExampleComponent;
```

<br/>

## Use Cases for Lifecycle Methods:

### 1. constructor(props)

- **Use Case:** Initializing state or binding event handlers.
- **Example:** Setting up initial values for the state or binding methods to this.

### 2. componentDidMount()

- **Use Case:** Fetching initial data, setting up subscriptions.
- **Example:** Making an API call to fetch data and setting it in the state.

### 3. shouldComponentUpdate(nextProps, nextState)

- **Use Case:** Optimizing performance by preventing unnecessary re-renders.
- **Example:** Comparing current props or state with next props or state and returning false if they are the same.

### 4. componentDidUpdate(prevProps, prevState)

- **Use Case:** Performing actions based on changes to props or state.
- **Example:** Making an API call when a prop changes.

### 5. componentWillUnmount()

- **Use Case:** Cleaning up resources before the component is destroyed.
- **Example:** Removing event listeners or canceling timers.

<br/>
<br/>

```js
In React, when you extend a Component class and implement a constructor, it's mandatory to call super(props) before any other statements.

This is because:

Inheritance: The constructor of the parent class (Component) needs to be called to ensure that the component is set up properly.
If you don't call super(props), this won't be defined, and you'll encounter an error.

Accessing props: Calling super(props) allows you to access this.props in the constructor.
If you don't pass props to super, this.props will be undefined.
```

<br>

## 1. constructor

```js
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
  // Initialize the state of the component
  this.state = {
    count1: 0,
    count2: 0,
  };
  console.log("UserClass (Child) constructor() Called");
}
```

## 2. render()

```js
/**
* render method is called to render the JSX
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
 const { count1, count2 } = this.state
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
```

## 3. componentDidMount()

```js
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
}
```

### 4. shouldComponentUpdate(nextProps, nextState)

```js
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
```

## 5. componentDidUpdate() / componentDidUpdate(prevProps, prevState)

```js
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

// componentDidUpdate() {
//  console.log("UserClass (Child) Component Did Update Called");
// }

componentDidUpdate(prevProps, prevState) {
  console.log("UserClass (Child) componentDidUpdate() Called");
  console.log("Previous Props: ", prevProps);
  console.log("Previous State: ", prevState);
  console.log("Current Props: ", this.props);
  console.log("Current State: ", this.state);
}
```

### 6. componentWillUnmount()

```js
/**
* componentWillUnmount is called before the component is removed from the DOM
* It is used to perform cleanup before the component is removed
* It is used to perform cleanup operations like clearing timers or subscriptions
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
```

## Example

```js
// About.js
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

    console.log("AboutClass (Parent) constructor() Called");
  }

  componentDidMount() {
    console.log("AboutClass (Parent) componentDidMount() Called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("AboutClass (Parent) shouldComponentUpdate() Called");
    console.log("Next Props: ", nextProps);
    console.log("Next State: ", nextState);
    console.log("Current Props: ", this.props);
    console.log("Current State: ", this.state);
    return true;
  }

  componentDidUpdate() {
    console.log("AboutClass (Parent) componentDidUpdate() Called");
  }
  
  componentWillUnmount() {
    console.log("AboutClass (Parent) componentWillUnmount() Called");
  }

  toggleUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };

  render() {
    console.log("AboutClass (Parent) render() Method Called");

    return (
      <div className="about-container">
        <div className="show-profile">
          {
            <button className="user-btn" onClickCapture={this.toggleUser}>
              {this.state.showUser ? "Hide User" : "Show User"}
            </button>
          }
          {this.state.showUser && (
            <User name={"Bharat Kumar"} location={"Bihar"} />
          )}
          {this.state.showUser && (
            <UserClass name={"Bharat Kumar"} location={"Bihar"} />
          )}
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
```

```js
// UserClass.js
import { Component } from "react";
import "../styles/User.css";

class UserClass extends Component {
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

  componentDidMount() {
    console.log("UserClass (Child) componentDidMount() Called");
  }

  componentDidUpdate() {
    console.log("UserClass (Child) componentDidUpdate() Called");
  }

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

  componentDidUpdate(prevProps, prevState) {
    console.log("UserClass (Child) componentDidUpdate() Called");
    console.log("Previous Props: ", prevProps);
    console.log("Previous State: ", prevState);
    console.log("Current Props: ", this.props);
    console.log("Current State: ", this.state);
  }

  componentWillUnmount() {
    console.log("UserClass (Child) componentWillUnmount() Called");
  }

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
```
