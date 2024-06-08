import React from "react";
import ReactDOM from "react-dom/client";

// create heading element using React.createElement
// React.createElement => ReactElement (JS Object) => HTMLElement (render) => DOM (Browser)
/*
const heading = React.createElement("h1", { id: "heading" }, "Namasate React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/ 

// create heading element using JSX
// JSX => React.createElement => ReactElement(Object) => HTMLElement(render) => DOM(Browser)
/*
const jsxHeading = <h1 id="heading">Namasate React using JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
*/


/**
 * React Component
 * Functional component - new way of writing component
 * Class component - old way of writing component
 * React component is a function or class that returns a React Element (JS Object)
 */

// React Functional Component
const elem = "React Element";
// const Title = () => {
//   return <h1 className="head" id="heading"><h1>{elem}</h1> Namaste React using JSX 🚀</h1>
// };

const Title = () => (
  <h1 className="head" id="heading">
    <h1 style={{color: "red"}}>{elem}</h1>
    Namaste React using JSX 🚀
  </h1>
);

// React Fragment: Behaves like an empty tag
// Component Composition - multiple components can be composed together to create a new component (Component Composition)
const HeadingComponent = () => (
  <>
    <div id="container">
      {/* {Title()} */}
      {/* <Title></Title> */}
      <Title />
      <h1 className="heaidng">Namaste React Fucntional Component</h1>
    </div>
 
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Title());
// root.render(<Title />);
root.render(<HeadingComponent />);
// root.render(HeadingComponent());



/**
 * React.createElement: Function (createElement) => ReactElement (JS Object) => HTMLElement (render) => DOM (Browser)
 *
 * React.createElement(type, props, children)
 * type: HTML tag name or React Component
 * props: Object, null or empty
 * children: String, React Element, Array of React Elements
 *
 * React Element: Object
 * React Element is a plain JavaScript object that represents a DOM element or a component.
 *
 * ReactDOM.createRoot(containerElement)
 * containerElement: HTMLElement
 *
 * ReactDOM.createRoot(containerElement) => root
 * root.render(ReactElement)
 *
 * React Element => Object => HTMLElement(render)
 */
/*
const heading = React.createElement("h1", {id: "heading"}, "Namasate React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/


/**
 * JSX: JavaScript XML
 * JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render) => DOM(Browser)
 *
 * JSX is a syntactic sugar for React.createElement
 * JSX is not a valid JavaScript, it needs to be transpiled using Bable to React.createElement before it can be rendered in the browser using ReactDOM
 * JSX (transpiled before it can be rendered in the browser using ReactDOM) => Parcel (Bundler) => Babel (Transpiler) => React.createElement => ReactDOM
 * JSX is optional, you can write React without JSX
 * JSX is more readable and easy to write
 * JSX is more like HTML
 * JSX is look like HTML or XML like syntax, but it's not HTML or XML. It's a syntax extension of JavaScript.
 * JSX is mixed of JavaScript and HTML like syntax that allows us to write HTML like code in React. 
 * JSX prevents cross-site injection attacks by escaping any values embedded in JSX before rendering them. 
 * 
 * Babel is a transpiler that converts JSX into React.createElement calls before it can be rendered in the browser using ReactDOM
 * Babel: JavaScript compiler that takes your modern JavaScript code (ES6) and returns code that most browsers can understand.
 */
/*
const jsxHeading = <h1 id="heading">Namasate React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
*/


/**
 * React Component
 * Functional component - new way of writing component
 * Class component - old way of writing component
 * React component is a function or class that returns a React Element (JS Object)
 * React component is a reusable piece of UI
 * React component is a building block of React application
 * React component is a pure JavaScript function or class
 * React component is a function that accepts props and returns a React Element
 * React component is a function that accepts props and returns JSX
 * React component is a function that accepts props and returns React.createElement
 */
/*
const Title = () => (
  <h1 className="head" id="heading">
    Namaste React using Functional Component 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Title());
root.render(<Title />);
*/


/**
 * React Fragment: Behaves like an empty tag
 * React Fragment is a component that allows you to group multiple children without adding extra nodes to the DOM
 * React Fragment is a component that allows you to return multiple children without adding extra nodes to the DOM
 * 
 * Syntax:
 * <React.Fragment>...</React.Fragment>
 * or
 * <>...</>
 */
/*
const elem = "React Element";

const Title = () => (
  <h1 className="head" id="heading">
    <h1 style={{color: "red"}}>{elem}</h1>
    Namaste React using JSX 🚀
  </h1>
);

// React Fragment: Behaves like an empty tag
// Component Composition - multiple components can be composed together to create a new component (Component Composition)
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heaidng">Namaste React Fucntional Component</h1>
    </div>

    <div id="container-2"></div>
  </>
);
*/