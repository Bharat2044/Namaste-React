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
