# _Episode 03 - Laying the Foundation_


- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
    - Create the `same element using JSX`
    - Create a `functional component of the same with JSX`
    - `Pass attribute` into the tag in `JSX`
    - `Composition of Component` (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.



## Q1): Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
```js
import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", {}, [
    React.createElement("h1", {class: "title"}, "This is an h1 tag"),
    React.createElement("h2", {class: "title"}, "This is an h2 tag"),
    React.createbElement("h3", {class: "title"}, "This is an h3 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
```


## Q2): Create the `same element using JSX`
```js
import React from "react";
import ReactDOM from "react-dom/client";

const header = (
    <div>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
```


## Q3): Create a `functional component of the same with JSX`
```js
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```


## Q4): `Pass attribute` into the tag in `JSX`
```js
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div style={{backgroundColor: "lightblue"}}>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```


## Q5): `Composition of Component` (Add a component inside another)
```js
import React from "react";
import ReactDOM from "react-dom/client";

const AnotherComponent = () => (
    <h2> This is Another an Component</h2>
);

const Header = () => (
    <div style={{backgroundColor: "lightblue"}}>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
        <AnotherComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```


## Q6): `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
```js
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>This is React Element</h1>;

const AnotherComponent = () => (
    <h2 style={{color: "purple"}}> This is an Another Component </h2>
);

const Header = () => (
    <div style={{backgroundColor: "lightblue"}}>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
        <AnotherComponent />
        <AnotherComponent></AnotherComponent>
        {<AnotherComponent />}
        {AnotherComponent()}
        {element}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```


## Calling App.js file
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root">
      <h1>Not Rendered</h1>
    </div>

    <!-- Injected External JavaScript File -->
    <script type="module" src="../Episode 03 - Laying the Foundation/Theory - Notes, Assignments & Assignment Solution/Assignment Solution/Coding Solution/Assignment 1/App.js"></script>
  </body>
</html>
```