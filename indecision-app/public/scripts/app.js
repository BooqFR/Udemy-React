"use strict";

console.log("App.js is running");

// JSX - Javascript XML

var template = React.createElement(
  "h1",
  null,
  "does this change ?"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);