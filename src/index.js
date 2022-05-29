import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import CompA from './CompA';

ReactDOM.render(<CompA />, document.getElementById("root"));

// Axios is a library that helps us make HTTP Requests to external resources
// In our React applications, we often need to retrieve data from external APIs so it can be displayed in our web pages.
// Axios is designed to handle HTTP requests and responses. Axios deals with responses using Promises, so it's streamlined and easy to use in our code. Axios uses methods like get() and post() that perform HTTP GET and POST requests for retrieving or creating resources. 