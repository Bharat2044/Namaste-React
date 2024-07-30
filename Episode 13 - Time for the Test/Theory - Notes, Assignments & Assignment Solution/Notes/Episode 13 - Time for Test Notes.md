# _Episode 13 - Time for the Test_

<br/>

## Types of Testing (Devloper)

1. **Unit Testing**: Testing one unit or one component in isolation, is known as Unit Testing.
2. **Integration Testing**: Integration Testing the integration of the component.
3. **End to End Testing - e2e testing**: Testing a react application as soon as user lands on the website to the user leaves the website, is known as End to End(e2e) Testing.

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
