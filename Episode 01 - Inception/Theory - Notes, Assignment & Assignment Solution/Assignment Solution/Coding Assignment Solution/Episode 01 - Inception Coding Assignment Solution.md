# _Episode 01 - Inception_


## Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`

<br/>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <h1>Hello World using HTML</h1>

    <div id="root">
        <h1>Not Rendered</h1>
    </div>

    <!-- Injecting React and ReactDOM CDN Link -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>

    <!-- Linking External JavaScript File -->
     <script src="./App.js"></script>
</body>
</html>
```

## Q1): Build your `first Hello World` program using, HTML
```html
<h1>Hello World using HTML</h1>
```

## Q2): Build your `first Hello World` program using, JavaScript DOM
```js
// App.js
const heading = document.createElement("h1");
heading.textContent = "Hello World using JavaScript DOM";

const root = document.getElementById("root");
root.appendChild(heading);
```


## Q3): Build your `first Hello World` program using, React
```js
// App.js
const heading = React.createElement("h1", null, "Hello World using React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```