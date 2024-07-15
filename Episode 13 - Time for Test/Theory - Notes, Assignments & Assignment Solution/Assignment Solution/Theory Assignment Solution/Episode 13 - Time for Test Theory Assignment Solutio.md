# _Episode 13 - Time for Test_


## Theory Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

<br/>

# Types of testing (developer)

- Unit Testing - Testing One Component in Isolation || means seperately
- Integration Testing - Testing Integration of Components
- End to End Testing (or) e2e Testing - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.

# Setting up Testing in our app

- Install @testing-library/react
- Install jest
- Install babel-jest @babel/core @babel/preset-env (jest dependencies)
- Configure Babel
- Configure parcel config to disable default babel transpilation
- Configure jest (npx jest --init)
- Install jsdom
- Install jsdom (npm install --save-dev jest-environment-jsdom)
- Install @babel/preset-react to run jest with JSX
- Include @babel/preset-react to babel config
- Include @testing-library/jest-dom


<br>
<br>

# Extra Questions:

## Ques): What is Enzyme?
**Ans.** Enzyme is a tool for testing React applications. It helps developers check if their React components work correctly. 
Enzyme makes it easier to simulate how users interact with the components and see if the components display the right things. 
It's like a testing assistant for React apps.

## Ques): Enzyme vs React testing Library 
**Ans.**  🔍 Enzyme provides more flexibility and is suitable for testing components in isolation, including class components.

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
