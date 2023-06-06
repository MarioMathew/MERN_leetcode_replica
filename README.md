# ExpressJS Authentication and Questionnaire Application

This repository contains a simple application built using Express.js that demonstrates user authentication and a questionnaire functionality. The application uses the Express.js framework for the server, and it stores data in-memory to keep things simple.

## Getting Started

### Prerequisites
You need to have Node.js installed on your system before you can use this Express.js application. If you have not installed Node.js, you can download it from the official website: [Node.js official website](https://nodejs.org/).

### Installation
Clone the repository to your local machine. You can do this by running the following command in your terminal:

### Install the dependencies with:

npm install

###  To run the application:

node index.js or npm start

if you have a start script defined in your package.json.

The server runs on http://localhost:3000.

### Features
User Signup: Users can register on the application by providing their email and password.
User Login: Users can login using the email and password provided during registration.
Questions: Users can view a list of questions.
Submissions: Users can view all submissions and can also submit answers for the questions.
### API Endpoints
### User Registration
URL: /signup
Method: POST
Data Parameters: { email: [string], password: [string] }
Success Response: { message: "User registered successfully" }
### User Login
URL: /login
Method: POST
Data Parameters: { email: [string], password: [string] }
Success Response: { token: [string] }
### Retrieve Questions
URL: /questions
Method: GET
Success Response: An array of questions { id: [number], content: [string] }
### Retrieve Submissions
URL: /submissions
Method: GET
Success Response: An array of submissions { userId: [string], questionId: [number], answer: [string] }
### Submit an Answer
URL: /submissions
Method: POST
Data Parameters: { userId: [string], questionId: [number], answer: [string] }
Success Response: { message: 'Submission successful' }
### Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.
### License
This project is licensed under the MIT License - see the LICENSE.md file for details.