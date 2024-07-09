# _Episode 11 - Data is the New Oil_

<br/>

## Ques): What is Higher-Order Components (HOCs)?

**Ans.** Higher-Order Components (HOCs) is a function which takes a component and return a component.

- Higher-Order Components (HOCs) are a pattern in React that allows you to reuse component logic.
- An HOC is a function that takes a component and returns a new component with additional props or behavior.
- This allows you to encapsulate common functionality and apply it to multiple components without duplicating code.

### Key Points about HOCs:

1. **Function Signature:**

   - An HOC is a function that takes a component as an argument and returns a new component.

   ```js
   const EnhancedComponent = higherOrderComponent(WrappedComponent);
   ```

2. **Purpose:**

   - They allow you to abstract and reuse component logic.
   - Common use cases include authentication checks, data fetching, and performance optimizations.

3. **Props Manipulation:**

   - HOCs can add, remove, or modify the props passed to the wrapped component.
   - They often inject additional props or behavior.

4. **Composition:**
   - Multiple HOCs can be composed together to add multiple layers of functionality.

```js
const EnhancedComponent = withAuth(withLogging(WrappedComponent));
```

5. **Stateless:**

   - HOCs are typically stateless, meaning they don't hold their own state but rather manage the state of the wrapped component.

6. **Best Practices:**
   - Name HOCs with a clear and descriptive name, often prefixed with "with" (e.g., `withAuth`, `withLogging`).
   - Avoid mutating the original component; instead, wrap and extend it.
   - Ensure that HOCs are reusable and composable.

### Example:

Here's an example of an HOC that adds logging functionality to a component:

```js
import React from "react";

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Usage
class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

const MyComponentWithLogging = withLogging(MyComponent);
```

In this example, `withLogging` is a Higher-Order Component that logs messages when the wrapped component mounts and unmounts. `MyComponent` is wrapped with `withLogging` to create a new component `MyComponentWithLogging` that includes this logging behavior.

<br/>

## Ques): When de we use Higher-Order Components (HOCs)?

**Ans.** Higher-Order Components (HOCs) are used in several scenarios in React development.

Here are some common use cases:

1. **Code Reusability:**

   - When you have common logic that needs to be shared across multiple components, HOCs allow you to encapsulate this logic in a single place and reuse it.

2. **Cross-Cutting Concerns:**

   - Cross-cutting concerns like logging, error handling, and analytics can be managed using HOCs, ensuring that this logic is consistently applied across components.

3. **Conditional Rendering:**

   - HOCs can be used to conditionally render components based on certain conditions, such as user authentication or feature flags.

   ```js
   const withAuth = (WrappedComponent) => {
     return class extends React.Component {
       render() {
         if (!this.props.isAuthenticated) {
           return <Redirect to="/login" />;
         }
         return <WrappedComponent {...this.props} />;
       }
     };
   };
   ```

4. **Data Fetching:**

   - For components that need to fetch data from an API, HOCs can handle the data fetching logic and pass the data down as props.

   ```js
   const withData = (url) => (WrappedComponent) => {
     return class extends React.Component {
       state = { data: null, loading: true };

       componentDidMount() {
         fetch(url)
           .then((response) => response.json())
           .then((data) => this.setState({ data, loading: false }));
       }

       render() {
         return <WrappedComponent {...this.props} {...this.state} />;
       }
     };
   };
   ```

5. **State Management:**

   - HOCs can manage state for wrapped components, abstracting complex state logic and providing a cleaner API for the wrapped component.

   ```js
   const withToggle = (WrappedComponent) => {
     return class extends React.Component {
       state = { toggled: false };

       toggle = () => {
         this.setState((prevState) => ({ toggled: !prevState.toggled }));
       };

       render() {
         return (
           <WrappedComponent
             {...this.props}
             toggled={this.state.toggled}
             toggle={this.toggle}
           />
         );
       }
     };
   };
   ```

6. **Behavior Injection:**

   - HOCs can inject behaviors, such as tracking user interactions or managing form submissions, without modifying the wrapped component's implementation.

7. **UI Enhancements:**

   - HOCs can be used to enhance UI components with additional styles, animations, or other visual modifications.

8. **Authorization:**

   - Ensuring that only authorized users can access certain components can be handled by HOCs, which check user permissions and render the appropriate UI.

9. **Performance Optimizations:**
   - HOCs can be used to optimize performance by implementing techniques like lazy loading or memoization.

<br/>

## Ques): Controlled vs Uncontrolled Components

**Ans.** In React, components can be categorized as either controlled or uncontrolled based on how they handle form data. Here’s an explanation of both, including their differences, pros, and cons.

### Controlled Components:

A controlled component is a component where the form data is handled by the component’s state. The value of the form elements is controlled by React and can only be updated via setState.

**Example:**

```jsx
import { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Pros:**

- `Single Source of Truth`: The state of the form is managed by React, making it easier to control and debug.
- `Validation`: Easier to implement validation logic because you have control over the form data.
- `Consistency`: Ensures that the UI is always in sync with the data.

**Cons:**

- `Boilerplate Code`: Requires more code to manage state and event handlers.
- `Performance`: Frequent state updates can cause performance issues in large forms with many elements.

### Uncontrolled Components:

An uncontrolled component is a component where the form data is handled by the DOM itself. Instead of using state to manage the form data, you use refs to access the form values directly from the DOM.

**Example:**

```jsx
import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Pros:**

- `Less Code`: Requires less boilerplate code because you don't need to manage state.
- `Performance`: Can be more performant in certain situations as there are fewer state updates.

**Cons:**

- `No Single Source of Truth`: Form data is not managed by React, making it harder to control and debug.
- `Validation`: Harder to implement validation logic since you don’t have control over the form data.
- `Inconsistency`: Potential for the UI to be out of sync with the data.

### Key Differences:

1. **State Management:**

   - `Controlled`: Form data is stored in the component’s state.
   - `Uncontrolled`: Form data is stored in the DOM.

2. **Handling Input:**

   - `Controlled`: Input changes are handled by React via event handlers and state updates.
   - `Uncontrolled`: Input changes are handled by the DOM, and values are accessed via refs.

3. **Validation:**

   - `Controlled`: Easier to implement validation logic within the component.
   - `Uncontrolled`: Harder to implement validation logic because the form data is not managed by React.

4. **Code Complexity:**

   - `Controlled`: Requires more boilerplate code to manage state and events.
   - `Uncontrolled`: Requires less boilerplate code but can become complex when adding validation and other logic.

### When to Use Each:

- **`Controlled Components`**: When you need more control over the form data, such as when implementing complex validation, dynamic forms, or handling data changes.
- **`Uncontrolled Components`**: When you need simpler forms with minimal validation and do not require frequent state updates. This is suitable for scenarios where performance is critical and state management overhead is unnecessary.

## Ques): What is props drilling?

**Ans.** Props drilling is a concept in React development where data (props) are passed from a higher-level component down to deeply nested child components through multiple intermediary components. This is necessary when deeply nested components need to access the same piece of data or functionality, but none of the intermediary components need it. While props drilling allows for passing data, it can lead to less maintainable code and make components more tightly coupled, which complicates debugging and refactoring.

### Example:

Here’s a simple example to illustrate props drilling:

```jsx
function GrandParent() {
  const value = "Hello from GrandParent";

  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <div>{value}</div>;
}
```

In this example, `value` is passed from the `GrandParent` component down to the `Child` component via the `Parent` component.

### Issues with Props Drilling:

1. **Boilerplate Code:** Repeatedly passing props through intermediary components adds boilerplate code.
2. **Maintainability:** It becomes harder to maintain and understand the component structure, especially as the application grows.
3. **Component Coupling:** Components become tightly coupled, reducing reusability.

### Alternatives to Props Drilling:

1. **Context API:** React’s Context API provides a way to share values between components without explicitly passing props through every level of the tree.
2. **State Management Libraries:** Libraries like Redux, MobX, or Zustand can manage state across the application, avoiding the need for deep prop passing.

### Context API Example:

Using the Context API to avoid props drilling:

```jsx
import React, { createContext, useContext } from "react";

const ValueContext = createContext();

function GrandParent() {
  const value = "Hello from GrandParent";

  return (
    <ValueContext.Provider value={value}>
      <Parent />
    </ValueContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const value = useContext(ValueContext);

  return <div>{value}</div>;
}
```

In this example, the `ValueContext` allows the `Child` component to access `value` directly, without passing it through the `Parent` component.

## **Note:** We are using React Context API to avoid prop drilling
