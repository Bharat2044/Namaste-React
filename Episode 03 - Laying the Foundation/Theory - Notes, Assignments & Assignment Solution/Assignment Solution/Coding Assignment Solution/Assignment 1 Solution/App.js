import React from "react";
import ReactDOM from "react-dom/client";

// Q1): Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
/*
const header = React.createElement("div", {}, [
    React.createElement("h1", {class: "title"}, "This is an h1 tag"),
    React.createElement("h2", {class: "title"}, "This is an h2 tag"),
    React.createElement("h3", {class: "title"}, "This is an h3 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
*/


// Q2): Create the same element using JSX
/*
const header = (
    <div>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
*/


// Q3): Create a functional component of the same with JSX
/*
const Header = () => (
    <div>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
*/


// Q4): Pass attribute into the tag in JSX
/*
const Header = () => (
    <div style={{backgroundColor: "lightblue"}}>
        <h1 className="title">This is an h1 tag</h1>
        <h2 className="title">This is an h2 tag</h2>
        <h3 className="title">This is an h3 tag</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
*/


// Q5): Composition of Component (Add a component inside another)
/*
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
*/


// Q6): {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
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