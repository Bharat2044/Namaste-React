# _Episode 02 - Igniting our App_

## Project Assignment:
- In your `existing project`
    - initialize `npm` into your `repo`
    - install `react` and `react-dom`
    - `remove CDN` links of `react`
    - `install parcel`
    - `ignite your app` with parcel
    - add scripts for `“start”` and `“build”` with `parcel commands`
    - add `.gitignore` file
    - add `browserlists`
    - `build a production version` of your code using `parcel build`


```css
/* index.css */
body {
  background-color: #d4d1d1;
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

#parent {
  width: fit-content;
  border: 1px solid red;
  padding: 0px 20px;
}

h1 {
  color: purple;
  font-size: 2rem;
}
```


```js
// App.js
// # Namaste React 🚀

/*
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
*/


import React from "react";
import ReactDOM from "react-dom/client";

const child1 = React.createElement("div", { id: "child1" }, [
  React.createElement("h1", {}, "This is Namaste React 🚀"),
  React.createElement("h2", {}, "by Akshay Saini"),
]);

const child2 = React.createElement("div", { id: "child2" }, [
  React.createElement("h1", {}, "I am an h1 tag"),
  React.createElement("h2", {}, "I am an h2 tag"),
]);

const parent = React.createElement(
  "div",
  {
    id: "parent"
  },
  [child1, child2]
);

// console.log(parent);  // object

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(parent);
```