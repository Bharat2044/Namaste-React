# _Episode 12 - Let's Build Our Store_

<br/>

# Redux Toolkit

- Install `@reduxjs/toolkit` and `react-redux`

  ```sh
  npm i @reduxjs/toolkit
  ```

  ```sh
  npm i react-redux
  ```

  - [Official Website - Redux TooLkit](https://redux-toolkit.js.org/)
  - [Official Website - React Redux](https://react-redux.js.org/)
  - [Immer](https://immerjs.github.io/immer/)
  - [NPM - Redux TooLkit](https://www.npmjs.com/package/@reduxjs/toolkit?activeTab=readme)
  - [NPM - React Redux](https://www.npmjs.com/package/react-redux)
  - [Redux and Redux TooLkit Articles](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)

- Build Our Store
- Connect our store to our App
- Create a Slice(cartSlice)
- dispatch(action)
- Read the data using Selector

<br/>

## Ques): What is Redux Toolkit?

**Ans.** Redux Toolkit (RTK) is a set of tools and best practices designed to simplify and improve the process of using Redux for state management in JavaScript applications, particularly with React. <br/> Redux Toolkit addresses common concerns and issues developers face when using Redux, such as boilerplate code, complex setup, and maintaining best practices.

### [What is Redux Toolkit?](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today#what-is-redux-toolkit)

### Key Features of Redux Toolkit:

1. **Simplified Configuration:**

   - `configureStore()`: A function that sets up the Redux store with good default settings, including support for Redux DevTools and middleware setup.
   - Automatically combines reducers and applies middleware.

2. **Create Slices:**

   - `createSlice()`: A function that helps create reducers and action creators more efficiently. It combines the actions and reducers in one place, reducing boilerplate code.
   - Each slice represents a piece of the state and includes reducers, initial state, and action creators.

3. **Create Async Thunks:**

   - `createAsyncThunk()`: A function to handle asynchronous logic like data fetching. It helps create actions and reducers to handle the lifecycle of an async request (pending, fulfilled, rejected).

4. **Immutable Updates:**

   - Built-in support for writing immutable updates using Immer, making it easier to write reducers without directly mutating the state.

5. **Pre-configured Middleware:**

   - Built-in support for common middleware such as redux-thunk for handling async actions, and optional middleware for additional features.

6. **Developer Experience:**
   - Better default error messages, warnings, and integration with Redux DevTools.

### Example Usage:

Here is a basic example of how you might use Redux Toolkit to create a store and a slice.

```js
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Create an async thunk
export const fetchCounterValue = createAsyncThunk(
  "counter/fetchValue",
  async () => {
    const response = await fetch("/api/counter");
    const data = await response.json();
    return data.value;
  }
);

// Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
```

In this example, createSlice helps generate the reducer and action creators, configureStore sets up the store with the reducer, and createAsyncThunk handles an asynchronous action.

Overall, Redux Toolkit makes it easier and more efficient to use Redux by reducing boilerplate and promoting best practices.

### [Redux Toolkit Official Website](https://redux-toolkit.js.org/)

<br/>

## Ques): What is Redux Store?

**Ans.** The Redux Store is the central hub of state management in a Redux application. It holds the entire state of the application and allows for state changes through dispatched actions. The store is a single JavaScript object that contains all the application state and can only be changed by dispatching actions that describe what should happen.

### Key Concepts of the Redux Store:

1. **Single Source of Truth**:

   - The entire state of your application is stored in a single object within the store. This simplifies state management and debugging.

2. **State is Read-Only**:

   - The state in the Redux store cannot be changed directly. To change the state, you need to dispatch an action, which is a plain JavaScript object describing the change.

3. **Changes are Made with Pure Functions**:
   - Actions are handled by reducers, which are pure functions that take the current state and an action as arguments and return a new state. Reducers must be pure functions, meaning they do not modify the original state but return a new state object.

### Core Functions of the Redux Store:

1. **`getState()`**:

   - Returns the current state of the store.

2. **`dispatch(action)`**:

   - Dispatches an action to the store. This is the only way to trigger a state change. The reducers process the action and return a new state.

3. **`subscribe(listener)`**:
   - Adds a change listener that will be called any time an action is dispatched and the state might have changed. It returns an unsubscribe function to remove the listener.

### Creating a Redux Store:

You create a Redux store using the `createStore` function from the Redux library or using `configureStore` from Redux Toolkit, which provides additional features and simplifies setup.

### Example of Creating a Redux Store:

Here is an example of how to create a Redux store using Redux Toolkit:

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
```

In this example, the store is created with configureStore from Redux Toolkit. The counterSlice defines the state and the reducers, which handle the actions. The store is configured with this slice's reducer.

### Accessing and Updating the State:

To interact with the Redux store, you can use the getState and dispatch methods.

```js
import store from "./store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

// Access the current state
console.log(store.getState());

// Dispatch actions to update the state
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(5));

// Access the updated state
console.log(store.getState());
```

This code shows how to access the current state of the store and how to dispatch actions to update the state.

The Redux Store is fundamental to Redux architecture, ensuring a predictable and centralized state management solution for your application.

<br/>

## Ques): Redux Toolkit Architecture:

**Ans.** Redux Toolkit simplifies the process of setting up and using Redux in your application. Below is a step-by-step outline of the architecture and flow, along with a diagram to illustrate the components and their interactions.

### Key Components:

1. **Slices**:

   - Created using `createSlice`, slices contain the initial state, reducers, and actions for a specific part of the state.

2. **Store**:

   - Configured using `configureStore`, the store combines all the slices' reducers and applies middleware, such as `redux-thunk` for handling asynchronous operations.

3. **Actions**:

   - Dispatched from components to trigger state changes. Actions can be synchronous (defined within slices) or asynchronous (created using `createAsyncThunk`).

4. **Reducers**:

   - Pure functions defined within slices that handle actions and update the state immutably.

5. **Selectors**:

   - Functions used to access specific parts of the state from the store.

6. **Components**:
   - React components that interact with the Redux store by dispatching actions and using selectors to read state values.

### Architecture Diagram:

Below is a diagram illustrating the Redux Toolkit architecture:

```plaintext
+-----------------------+                  +----------------------+
|                       |                  |                      |
|  React Components     | <-- dispatch --  |       Actions        |
|                       |                  |                      |
+-----------+-----------+                  +-----+----------------+
            |                                    |
            |                                    |
            |                                    |
            |                                    v
            |                          +---------+---------+
            |                          |                   |
            |                          |     Reducers      |
            |                          |                   |
            |                          +---------+---------+
            |                                    |
            |                                    |
            v                                    |
+-----------+-----------+                        |
|                       |                        |
|        Store          | <-- state updates --   |
|                       |                        |
+-----------+-----------+                        |
            |                                    |
            |                                    v
            |                          +---------+---------+
            |                          |                   |
            |                          |      Slices       |
            |                          |                   |
            |                          +---------+---------+
            |                                    |
            |                                    |
            v                                    v
+-----------+-----------+              +---------+---------+
|                       |              |                   |
|    createSlice()      |              |  createAsyncThunk |
|                       |              |                   |
+-----------------------+              +-------------------+
```

### Example Usage:

Here is an example of how to create a Redux store using Redux Toolkit:

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
```

### Accessing and Updating the State:

To interact with the Redux store, you can use the getState and dispatch methods.

```js
import store from "./store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

// Access the current state
console.log(store.getState());

// Dispatch actions to update the state
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(5));

// Access the updated state
console.log(store.getState());
```

This setup and interaction model ensures a predictable and centralized state management solution for your application, facilitated by the conveniences provided by Redux Toolkit.

<br/>

## How Redux Toolkit works behind the Sence?

![Architecture Diagram](./Redux%20Toolkit%20Architecture.png)

## Note: Redux use Immer behind the scence
