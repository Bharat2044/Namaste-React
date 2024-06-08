# _Episode 03 - Laying the Foundation_


## Create a `Header Component` from scratch using `Functional Component` with JSX
- Add a `Logo on Left`
- Add a `search bar in middle`
- Add `User icon on right`
- Add `CSS to make it look nice`

<br/>


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
    <script type="module" src="../Episode 03 - Laying the Foundation/Theory - Notes, Assignments & Assignment Solution/Assignment Solution/Coding Assignment Solution/Assignment 2/App.js"></script>
  </body>
</html>
```

```css
/* index.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(204, 203, 203);
}

.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo, .user-icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
}

.search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
}

input {
    width: 20rem;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    outline: none;
}

.search-icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
}
```


```js
// App.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./images/logo.jpg";
import searchIcon from './images/search_icon.png';
import userIcon from './images/user_icon.webp';

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />

        <div className="search-bar">
          <input            
            type="text"
            placeholder="Search anything you want..."
          />  
          <img className="search-icon" src={searchIcon} alt="search icon" />   
        </div>
        
        <img className="user-icon" src={userIcon} alt="user icon" />
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```
