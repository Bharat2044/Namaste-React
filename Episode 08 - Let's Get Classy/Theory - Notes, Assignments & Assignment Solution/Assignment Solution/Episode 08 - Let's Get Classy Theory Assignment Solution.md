# _Episode 08 - Let's Get Classy_


## Ques): How do you create `Nested Routes` react-router-dom configuration?
**Ans:** We can create a `Nested Routes` inside a react router configuration as follows:<br/>
first call createBrowserRouter for routing different pages
```js
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:
```js
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "child",      // Don't use '/' because then react-router-dom will understand it's the direct path
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```


## Ques): Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
**Ans:** `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".<br/>
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)


## Ques): What is the order of life cycle method calls in `Class Based Components`?
**Ans:** Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## Ques): Why do we use `componentDidMount`?
**Ans:** The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.<br/>
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.


## Ques): Why do we use `componentWillUnmount`? Show with example.
**Ans:** `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.<br/>
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.


## Ques): (Research) Why do we use `super(props)` in constructor?
**Ans:** `super(props)` is used to inherit the properties and access variables of the React parent class when we initialize our component.<br/>
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.<br/>
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.


## Ques): (Research) Why can't we have the `callback function` of `useEffect async`?
**Ans:** `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
