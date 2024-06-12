# _Episode 07 - Finding the Path_

## Ques): What are various ways to `add images` into our App? Explain with `code examples`.
**Ans:** Using the `full URL of the image` for the web (CDN) or any public images.
**Example:**
```html
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component
```js
import reactLogo from "./reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="react logo" />;
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.
```js
import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="react logo" />;
}
```


## Ques): What would happen if we do `console.log(useState())`?
**Ans:** If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.


## Ques): How will `useEffect` behave if we `don't add` a `dependency array`?
**Ans:** Syntax of `useEffect` is:
```js
useEffect(() => {}, []);
```

**Case 1:** When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```js
useEffect(() => {
  console.log("I run everytime this component rerenders");
});
```

**Case 2:** When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
```js
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

**Case 3:** When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
```js
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```


## Ques): What is `SPA`?
**Ans:** `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## Ques): What is the difference between `Client Side Routing` and `Server Side Routing`?
**Ans:** In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.<br/>
In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend.<br/> All `Single Page Applications uses client-side routing`.
