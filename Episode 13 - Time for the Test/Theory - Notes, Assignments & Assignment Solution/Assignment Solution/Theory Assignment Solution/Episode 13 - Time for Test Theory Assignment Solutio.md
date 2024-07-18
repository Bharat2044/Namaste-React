# _Episode 13 - Time for the Test_

## Theory Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

<br/>

## Types of Testing (Devloper)

1. **Unit Testing**: Testing one unit or one component in isolation, is known as Unit Testing.
2. **Integration Testing**: Integration Testing the integration of the component.
3. **End to End Testing - e2e testing**: Testing a react application as soon as user lands on the website to the user leaves the website, is known as End to End(e2e) Testing.

- Unit Testing - Testing One Component in Isolation || means seperately
- Integration Testing - Testing Integration of Components
- End to End Testing (or) E2E Testing - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.

## Setting up Testing in our app

- Install React Testing Library
- npm install --save-dev @testing-library/react @testing-library/dom
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

## React Testing Library

- [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/) buids on top of [`DOM Testing Library`](https://testing-library.com/docs/dom-testing-library/intro) by adding APIs for working with React components.
- `React Testing Library` uses `Jest` behind the scence.
- [`Jest`](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

- Install `React Testing Library`

  ```sh
  npm install -D @testing-library/react
  ```

- Install `Jest`

  ```sh
  npm install -D jest
  ```

- When you use `Babel`, you should these dependencies also

  ```sh
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```

- Configure `Babel` to target your current version of Node by creating a babel.config.js file in the root of your project:

  ```js
  // babel.config.js
  module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  };
  ```

- Configure Parcel Config file(`.parcelrc`) to disable default babel transpilation

  ```js
  // .parcelrc
  {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{js,mjs,jsx,cjs,ts,tsx}": [
        "@parcel/transformer-js",
        "@parcel/transformer-react-refresh-wrap"
      ]
    }
  }
  ```

- Run the test case: Command to run test cases

  ```sh
  npm run test
  ```

- Jest Configuration: Initialize the Jest, it will create new Jest Configuration file(`jest.config.js`)
  ```sh
  npx jest --init
  ```
- Install [`jsdom`](https://testing-library.com/docs/react-testing-library/setup) Library

  ```sh
  npm install --save-dev jest-environment-jsdom
  ```

- Install `@babel/preset-react` to make JSX work in test cases
  ```sh
  npm install @babel/preset-react
  ```
- Include `@babel/preset-react` inside my `babel.config.js` file - `@babel/preset-react` helping our testing library to convert JSX code to HTML, so it can read properly

  ```js
  // babel.config.js
  module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
  };
  ```

- Install `@testing-library/jest-dom`

  ```sh
  npm install -D @testing-library/jest-dom
  ```

- Create test file inside `__test__` flder
- These file are considered as test file - `**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`

- `__` is known as `Dunder Tests`.

```
fileName.test.js
fileName.test.ts
fileName.spec.js
fileName.spec.ts
```

## References

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [Jest](https://jestjs.io/)
- [Parcel](https://parceljs.org/docs/)
- [Parcel Jest](https://parceljs.org/languages/javascript/#babel)
- [JSDOM Library](https://www.npmjs.com/package/jsdom)
- [Jest 28](https://testing-library.com/docs/react-testing-library/setup)

## References

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [Jest](https://jestjs.io/)
- [Parcel](https://parceljs.org/docs/)
- [Parcel Jest](https://parceljs.org/languages/javascript/#babel)
- [JSDOM Library](https://www.npmjs.com/package/jsdom)
- [Jest 28](https://testing-library.com/docs/react-testing-library/setup)

<br/>

## Ques): What are the difference types of Testing?

**Ans.** In React development, various types of testing ensure that components and applications work correctly.

Here are some common types of testing in React:

### Unit Testing

- **Purpose**: Test individual components or functions in isolation.
- **Tools**: Jest, Mocha, Chai.
- **Example**: Testing if a function correctly returns the expected output given specific inputs.

### Component Testing

- **Purpose**: Test the rendering and behavior of React components.
- **Tools**: React Testing Library, Enzyme.
- **Example**: Checking if a component renders correctly based on its props and state.

### Integration Testing

- **Purpose**: Test the interaction between multiple components or services.
- **Tools**: Jest, React Testing Library, Cypress.
- **Example**: Ensuring that data fetched from an API is correctly passed to and displayed by a component.

### End-to-End (E2E) Testing

- **Purpose**: Test the entire application workflow from the user’s perspective.
- **Tools**: Cypress, Selenium, Puppeteer.
- **Example**: Simulating a user logging in, navigating through the app, and verifying that the expected elements are displayed.

### Snapshot Testing

- **Purpose**: Test that a component’s output does not change unexpectedly.
- **Tools**: Jest (with built-in snapshot testing).
- **Example**: Capturing the rendered output of a component and comparing it to a stored snapshot to detect unintended changes.

### Performance Testing

- **Purpose**: Test the performance of components and the application as a whole.
- **Tools**: Lighthouse, React Profiler.
- **Example**: Measuring render times and optimizing components for better performance.

### Static Testing

- **Purpose**: Analyze code for potential errors without executing it.
- **Tools**: ESLint, TypeScript (for type checking).
- **Example**: Linting code to enforce coding standards and detect syntax errors.

## Tools Overview

### Jest

- **Type**: Unit, Integration, Snapshot
- **Features**: Fast, easy setup, built-in mocking, assertions, and spies.

### React Testing Library

- **Type**: Component, Integration
- **Features**: Focuses on testing components from the user's perspective.

### Enzyme

- **Type**: Component
- **Features**: Allows shallow rendering, full DOM rendering, and static rendering for testing React components.

### Cypress

- **Type**: End-to-End, Integration
- **Features**: Real browser testing, great for UI testing with extensive debugging capabilities.

### Mocha/Chai

- **Type**: Unit, Integration
- **Features**: Flexible, with various plugins available to enhance testing capabilities.

### Puppeteer

- **Type**: End-to-End
- **Features**: Headless browser testing using Chrome.

## Best Practices

- **Test Coverage**: Aim for high test coverage but focus on critical paths.
- **Test Reliability**: Ensure tests are reliable and not prone to flakiness.
- **Maintainability**: Write tests that are easy to understand and maintain.
- **Performance**: Avoid overly complex tests that slow down the development process.

By leveraging these different types of testing, you can ensure a robust and reliable React application.

<br/>

## Ques): React Testing Library and It's set up

**Ans.** React Testing Library is a popular tool for testing React components, focusing on testing components from the user's perspective. It encourages best practices by emphasizing testing the behavior of components rather than their implementation details.

### Key Features

- **User-Centric**: Tests are written in a way that resembles how users interact with the application.
- **Simplicity**: Provides a simple API that integrates well with Jest.
- **Best Practices**: Encourages writing tests that are easy to maintain and understand.

### Installation

To use React Testing Library, you need to install it along with Jest (if you haven't already). You can install it using npm or yarn:

- **Using npm**

  ```bash
  npm install --save @testing-library/react @testing-library/jest-dom
  ```

- **Using yarn**
  ```sh
  yarn add @testing-library/react @testing-library/jest-dom
  ```

### Setup

After installing the necessary packages, you need to set up Jest to use React Testing Library. Follow these steps:

1. **Configure Jest**: Ensure Jest is set up in your project. If you're using Create React App, Jest is already configured for you.

2. **Create a Setup File**: Create a setup file to include additional configurations for React Testing Library. This file is typically named `setupTests.js`.

   ```js
   // setupTests.js
   import "@testing-library/jest-dom/extend-expect";
   ```

3. **Update Jest Configuration**: Ensure your Jest configuration includes the setup file. If you're using Create React App, it automatically picks up `setupTests.js`. If you have a custom Jest configuration, add the setup file path to the `setupFilesAfterEnv` array in your `jest.config.js` file:

   ```js
   // jest.config.js
   module.exports = {
     setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
     // Other Jest configurations...
   };
   ```

### Writing Tests

Here are some examples of how to write tests using React Testing Library:

#### Rendering a Component

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

#### Interacting with Elements

```js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  const counter = screen.getByText(/count: 1/i);
  expect(counter).toBeInTheDocument();
});
```

### Best Practices

- **Test Behavior, Not Implementation**: Focus on how the component behaves from the user's perspective.
- **Use Queries Appropriately**: Prefer queries like `getByRole`, `getByLabelText`, and `getByText` which reflect how users interact with the app.
- **Avoid Direct State Manipulation**: Avoid testing implementation details such as internal state directly. Test the UI and behavior.

By following these steps and best practices, you can effectively use React Testing Library to write reliable and maintainable tests for your React components.

<br/>

## Ques): What is Jest and why do we use it?

**Ans.** Jest is a popular JavaScript testing framework developed by Facebook. It is widely used for testing React applications due to its simplicity, speed, and powerful features. Jest provides an all-in-one testing solution that includes a test runner, assertion library, mocking capabilities, and more.

### Key Features

- **Zero Configuration**: Jest works out of the box for most JavaScript projects without any configuration.
- **Fast and Reliable**: Jest runs tests in parallel and uses a smart algorithm to only run tests affected by recent changes.
- **Snapshot Testing**: Allows you to capture the rendered output of components and compare them to previous snapshots to detect changes.
- **Mocking**: Provides built-in mocking capabilities for functions, modules, and timers.
- **Code Coverage**: Generates detailed code coverage reports to ensure that your tests cover all critical parts of your application.
- **Great Integration with React**: Specifically designed to work seamlessly with React and other JavaScript frameworks.

### Why Use Jest?

1. **Ease of Use**: Jest is easy to set up and use, especially with Create React App, which includes Jest by default. You can start writing tests immediately without worrying about complex configurations.

2. **Comprehensive Testing**: Jest supports unit testing, integration testing, and snapshot testing, making it a versatile choice for various testing needs.

3. **Performance**: Jest runs tests in parallel and only re-runs tests affected by code changes, which speeds up the testing process.

4. **Rich Features**: Built-in features like snapshot testing, mocking, and code coverage make Jest a powerful tool for ensuring the quality of your code.

5. **Community and Ecosystem**: Jest has a large and active community, extensive documentation, and a wide range of plugins and integrations, making it a well-supported choice for testing.

### Installation

To use Jest, you can install it using npm or yarn:

- **Using npm**

  ```bash
  npm install --save-dev jest
  ```

- **Using yarn**
  ```sh
  yarn add --dev jest
  ```

### Configuration

If you're using Create React App, Jest is already configured. Otherwise, you can add a basic configuration by creating a `jest.config.js` file:

```js
// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  // Other configurations...
};
```

### Writing Tests

Here are some examples of how to write tests using Jest:

- **Basic Test**

  ```js
  // sum.js
  function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

  // sum.test.js
  const sum = require("./sum");

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

- **Snapshot Test**

  ```js
  import React from "react";
  import renderer from "react-test-renderer";
  import App from "./App";

  test("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ```

- **Mocking**

  ```js
  const fetchData = require("./fetchData");

  jest.mock("./fetchData");

  test("fetches data successfully", async () => {
    fetchData.mockResolvedValue({ data: "some data" });
    const data = await fetchData();
    expect(data).toEqual({ data: "some data" });
  });
  ```

### Running Tests

To run tests, add a script to your package.json:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Then, run the tests with:

```sh
npm test
```

**or**

```sh
yarn test
```

By using Jest, you can write efficient and effective tests for your React applications, ensuring they behave as expected and remain maintainable over time.

<br>

## Ques): Jest setup and installation of it's related

**Ans.** Jest is a powerful testing framework for JavaScript, often used with React. It comes with a test runner, assertion library, and built-in mocking and code coverage features. This section will guide you through the setup and installation of Jest and its related tools.

### Installation

To install Jest, you can use npm or yarn. The following commands will add Jest as a development dependency:

- **Using npm**

  ```bash
  npm install --save-dev jest
  ```

- **Using yarn**
  ```sh
  yarn add --dev jest
  ```

### Installation of Related Tools

For React applications, you may also want to install `@testing-library/react` and `@testing-library/jest-dom` to enhance your testing experience with Jest.

- **Using npm**

  ```bash
  npm install --save-dev @testing-library/react @testing-library/jest-dom
  ```

- **Using yarn**
  ```sh
  yarn add --dev @testing-library/react @testing-library/jest-dom
  ```

### Initial Setup

1. **Configure Jest**:
   Create a jest.config.js file to configure Jest. If you are using Create React App, Jest is pre-configured, and you can skip this step.

   ```js
   // jest.config.js
   module.exports = {
     testEnvironment: "jsdom",
     setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
   };
   ```

2. **Create Setup File**:
   Create a setup file to include additional configurations for React Testing Library. This file is typically named `setupTests.js`.

   ```js
   // src/setupTests.js
   import "@testing-library/jest-dom/extend-expect";
   ```

3. **Update Package.json**:
   Ensure your `package.json` includes a test script that runs Jest.

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

### Writing Tests

With Jest and React Testing Library installed, you can start writing tests. Here are some examples:

- **Basic Component Test**

  ```js
  import React from "react";
  import { render, screen } from "@testing-library/react";
  import App from "./App";

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  ```

- **Snapshot Test**

  ```js
  import React from "react";
  import renderer from "react-test-renderer";
  import App from "./App";

  test("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ```

- **Mocking with Jest**

  ```js
  const fetchData = require("./fetchData");

  jest.mock("./fetchData");

  test("fetches data successfully", async () => {
    fetchData.mockResolvedValue({ data: "some data" });
    const data = await fetchData();
    expect(data).toEqual({ data: "some data" });
  });
  ```

### Running Tests

To run your tests, use the following command:

- **Using npm**

  ```sh
  npm test
  ```

- **Using yarn**
  ```sh
  yarn test
  ```

This will start Jest in watch mode, automatically running tests when files change.

### Additional Configurations

You can further customize Jest by adding more configuration options to your jest.config.js file. Here are some common configurations:

- **Collect Code Coverage**:
  Enable code coverage reports by adding the following to your Jest configuration:

  ```js
  // jest.config.js
  module.exports = {
    collectCoverage: true,
    coverageReporters: ["text", "lcov"],
    // Other configurations...
  };
  ```

- **Setup Test Environment**:
  Jest uses jsdom by default to simulate a browser environment. If you need a different environment, you can change it:

  ```js
  // jest.config.js
  module.exports = {
    testEnvironment: "node", // For Node.js environment
    // Other configurations...
  };
  ```

By following these steps, you can set up Jest and related tools for testing your React applications, ensuring a robust and maintainable codebase.

<br>
<br>

# Extra Questions:

## Ques): What is Enzyme?

**Ans.** Enzyme is a tool for testing React applications. It helps developers check if their React components work correctly.
Enzyme makes it easier to simulate how users interact with the components and see if the components display the right things.
It's like a testing assistant for React apps.

## Ques): Enzyme vs React testing Library

**Ans.** 🔍 Enzyme provides more flexibility and is suitable for testing components in isolation, including class components.

🚶‍♂️ React Testing Library promotes user-centered testing and is ideal for functional components and best practices in testing the user interface.

👍 React Testing Library has gained popularity in the React community and is recommended for most modern React projects, but we can choose the tool that aligns best with our testing goals and project requirements.

## Ques): What is jest and why do we use it?

**Ans.** Jest is a versatile and powerful testing framework for JavaScript and React applications. Its simplicity, speed, built-in features, and extensive community support make it a preferred choice for many developers when it comes to writing and running tests for their code.

Certainly! Here are some key reasons why Jest is popular for testing React applications

🚀 Fast and Parallel Execution
📸 Snapshot Testing
🃏 Powerful Mocking
🔄 Built-in Test Runner
📊 Code Coverage
🤝 Integration with React
🌐 Large Ecosystem
🧩 Ease of Use

## Ques): Types of test cases in React as a developers

**Ans.** There are different test cases in React as a developers

- Unit Testing: 🧩
- Integration Testing: 🌐
- End-to-End Testing: 🏁

## Ques): What is JSdom?

**Ans.** JSdom is a js library that allows us to work with dom in node.js enviourment.
In simple terms it lets you manipulate and interact with web pages just like we would in a web browser.

But with in a server-side js enviourment, This is useful for tasks like web scraping, testing web applications or rendering web pages on the server.
