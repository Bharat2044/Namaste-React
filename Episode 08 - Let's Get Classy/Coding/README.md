# _Episode 08 - Let's Get Classy_


# React Class Based Component

## Use Cases for Lifecycle Methods:

### 1. constructor(props)

- **Use Case:** Initializing state or binding event handlers.
- **Example:** Setting up initial values for the state or binding methods to this.

### 2. componentDidMount()

- **Use Case:** Fetching initial data, setting up subscriptions.
- **Example:** Making an API call to fetch data and setting it in the state.

### 3. shouldComponentUpdate(nextProps, nextState)

- **Use Case:** Optimizing performance by preventing unnecessary re-renders.
- **Example:** Comparing current props or state with next props or state and returning false if they are the same.

### 4. componentDidUpdate(prevProps, prevState)

- **Use Case:** Performing actions based on changes to props or state.
- **Example:** Making an API call when a prop changes.

### 5. componentWillUnmount()

- **Use Case:** Cleaning up resources before the component is destroyed.
- **Example:** Removing event listeners or canceling timers.