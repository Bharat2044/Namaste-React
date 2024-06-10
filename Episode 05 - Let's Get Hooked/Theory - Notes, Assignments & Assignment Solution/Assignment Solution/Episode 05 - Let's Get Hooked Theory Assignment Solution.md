# _Episode 05 - Let's Get Hooked_


## Ques): What is the difference between `Named export`, `Default export`, and `* as export`?
**Ans:** ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.<br/>
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.<br/>
In `Named export`, the component is exported from MyComponent.js file like:
```js
    export const MyComponent = () => {}
    export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```js
    // Ex. importing a single named export
    import { MyComponent } from "./MyComponent";

    // Ex. importing multiple named exports
    import { MyComponent, MyComponent2 } from "./MyComponent";

    // Ex. giving a named import a different name by using "as":
    import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.<br/>
In `Default export`, the component is exported from MyComponent.js file like:
```js
    const MyComponent = () => {}
    export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```js
    import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.<br/>
In `* as export`, the component is exported from MyComponent.js file like:
```js
    export const MyComponent = () => {}
    export const MyComponent2 = () => {}
    export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```js
    import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```js
    <MainComponents.MyComponent />
    <MainComponents.MyComponent2 />
    <MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```js
    export const MyComponent2 = () => {}
    const MyComponent = () => {}
    export default MyComponent;
```
and import like:
```js
    import MyComponent, {MyComponent2} from "./MyComponent";
```


## Ques): What is the importance of `config.js` file?
**Ans:** `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable.<br/>
Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.<br/>
Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user.<br/>
For Example:
```js
    Bharat
```
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:
```js
    NAME='Bharat'
    SURNAME='Kumar'
```

## Ques): What are `React Hooks`?
**Ans:** In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.<br/>
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.


## Ques): Why do we need `useState Hook`?
**Ans:** `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.<br/>
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.<br/>  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
#### Syntax for useState Hook:
```js
    const [state, setState] = useState(initialstate);
```
#### Importing: To use useState you need to import useState from react as shown below:
```js
    import React, { useState } from "react";
```
we can use Hooks in Functional Components
```js
    const Example = (props) => {
        // You can use Hooks here!
        return <div />;
    }
```