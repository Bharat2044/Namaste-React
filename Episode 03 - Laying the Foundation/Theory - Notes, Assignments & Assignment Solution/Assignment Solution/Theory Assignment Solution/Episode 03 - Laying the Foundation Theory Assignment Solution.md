# _Episode 03 - Laying the Foundation_

## Ques): What is `JSX`?
**Ans:** JSX stands for JavaScript XML.<br/>
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.<br/>
JSX makes it easier to write and add HTML in React.<br/>
JSX converts HTML tags into react elements.<br/>
JSX is a syntax extension that looks like HTML, but it's really just syntactic sugar for React.createElement(). JSX makes it easier to write and visualize the UI.<br/>


### Example 1 using JSX:
```js
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```js
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Ques): Superpowers of `JSX`.
**Ans:** Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example:
```js
function greeting(user) {
  //JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Ques): Role of `type` attribute in script tag? What options can I use there?
**Ans:** The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax:
    ```js
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and requires babel to transpile it.
- `text/typescript`: As the name suggests the script is written in `TypeScript`.

## Ques): `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
**Ans:** The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example:
```js
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

<br />

## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) 
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)

<br />
<br />

# Extra Information:
```
React.createElement (createElement) => ReactElement (JS Object) => HTMLElement (render) => DOM (Browser) 

React.createElement(type, props, children)
type: HTML tag name or React Component
props: Object, null or empty
children: String, React Element, Array of React Elements

React Element: Object
React Element is a plain JavaScript object that represents a DOM element or a component.

ReactDOM.createRoot(containerElement)
containerElement: HTMLElement

ReactDOM.createRoot(containerElement) => root
root.render(ReactElement)

React Element => Object => HTMLElement(render)
```

```js
const heading = React.createElement("h1", {id: "heading"}, "Namasate React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

<br />

## JSX: JavaScript XML
- JSX: JSX stands for JavaScript XML
- JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render) => DOM(Browser)  
- 
- JSX is a syntactic sugar for React.createElement
- JSX is not a valid JavaScript, it needs to be transpiled using Babel to React.createElement before it can be rendered in the browser using ReactDOM 
- JSX (transpiled before it can be rendered in the browser using ReactDOM) => Parcel (Bundler) => Babel (Transpiler) => React.createElement => ReactDOM
- JSX is optional, you can write React without JSX
- JSX is more readable and easy to write
- JSX is more like HTML
- JSX is look like HTML or XML like syntax, but it's not HTML or XML. It's a syntax extension of JavaScript.
- JSX is mixed of JavaScript and HTML like syntax that allows us to write HTML like code in React. 
- JSX prevents cross-site injection attacks by escaping any values embedded in JSX before rendering them. 
- Babel is a transpiler that converts JSX into React.createElement calls before it can be rendered in the browser using ReactDOM 
- Babel: JavaScript compiler that takes your modern JavaScript code (ES6) and returns code that most browsers can understand.

```js
const jsxHeading = <h1 id="heading">Namasate React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

<br />

## React Component:
- React Component: 2 types of component
1. Functional component - new way of writing component 
2. Class component - old way of writing component
- React component is a function or class that returns a React Element (JS Object) 
- React component is a reusable piece of UI
- React component is a building block of React application
- React component is a pure JavaScript function or class
- React component is a function that accepts props and returns a React Element
- React component is a function that accepts props and returns JSX
- React component is a function that accepts props and returns React.createElement


#### Example of Functional Component:
```js
const Title = () => (
  <h1 className="head" id="heading">
    Namaste React using Functional Component 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Title());
root.render(<Title />);
```

<br />


## React Fragment:
- React Fragment: Behaves like an empty tag
- React Fragment is a component that allows you to group multiple children without adding extra nodes to the DOM
- React Fragment is a component that allows you to return multiple children without adding extra nodes to the DOM

### Syntax:
```js
  <React.Fragment>...</React.Fragment>
  or
  <>...</>
```

### Example:
```js
const elem = "React Element";

const Title = () => (
  <h1 className="head" id="heading">
    <h1 style={{color: "red"}}>{elem}</h1>
    Namaste React using JSX 🚀
  </h1>
);

// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
    {/* {Title()} */}
      {/* <Title /> */}
      <Title></Title>
      <h1 className="heaidng">Namaste React Fucntional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## Component Composition - multiple components can be composed together to create a new component (Component Composition)
Component Composition refers to the process of nesting multiple components inside another component to create a larger, more complex component.<br/>

### Recap:<br/>

- Functional components are the **modern** way of writing components in React.<br/>
- Class components are still used but less frequently since **Hooks** have made functional components more powerful.<br/>
- Both types of components return React elements (JS objects that describe the UI) and accept `props`.<br/>
- JSX is the preferred way of writing React elements, but it gets converted to `React.createElement()` under the hood.<br/>
