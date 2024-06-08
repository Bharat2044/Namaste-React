/*
Build your `first Hello World` program using,
    Using `just HTML`
    Using `JS to manipulate the DOM`
    Using `React`
        use `CDN Links`
        Create `an Element`
        Create `nested React Elements`
        Use `root.render`
*/

// Q1): Build your `first Hello World` program using, HTML
/*
<h1>Hello World using HTML</h1>
*/

// Q2): Build your `first Hello World` program using, JavaScript DOM
/*
const heading = document.createElement("h1");
heading.textContent = "Hello World using JavaScript DOM";

const root = document.getElementById("root");
root.appendChild(heading);
*/


// Q3): Build your `first Hello World` program using, React
const heading = React.createElement("h1", null, "Hello World using React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);