# _Episode 13 - Time for the Test_

<br/>

## Types of testing (devloper)

1. **Unit Testing**: Testing one unit or one component in isolation, is known as Unit Testing.
2. **Integration Testing**: Integration Testing the integration of the component.
3. **End to End Testing - e2e testing**: Testing a react application as soon as user lands on the website to the user leaves the website, is known as End to End(e2e) Testing.

## Setting up Testing in our app

- Installed `React Testing Library`
  ```sh
  npm install -D @testing-library/react
  ```
- Install `jest`
  ```sh
  npm install -D jest
  ```
- Install `Babel dependencies`
  ```sh
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```
- Configure `Babel`
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

- Command to run test cases
    ```sh
    npm run test
    ```

- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

## React Testing Library

- `React Testing Library` buids on top of `DOM Testing Library` by adding APIs for working with React components.
- `React Testing Library` uses `JEST` behind the scence. 
- `Jest` is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

- Install `React Testing Library`

  ```sh
  npm install -D @testing-library/react
  ```

- Install `JEST`

  ```sh
  npm install -D jest
  ```

- When you use `Babel`, you should these dependencies also

  ```sh
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```

- Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

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

## References

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [JEST](https://jestjs.io/)
- [Parcel](https://parceljs.org/docs/)
- [Parcel Jest](https://parceljs.org/languages/javascript/#babel)
