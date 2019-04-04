import React from "react"; //   contains the core React library
import ReactDOM from "react-dom"; //contains functionality for interacting with the DOM, some React applications (like those that use React VR or React Native) don't actually interact with the browser's DOM, and don't require that portion of the library.
import "./index.css";
import App from "./App";
import Notebook from "./Notebook";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Notebook />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//ReactDOM.render() is actually creating HTML elements using a method in JavaScript's web API called Document.createElement(). This method takes a single argument and returns a single HTML element. That means the corresponding React method, React.createElement() calls Document.createElement() for each argument provided to it.

//Despite explicitly instructing it to redefine multiple DOM elements, React is smart enough to only update elements that actually change
