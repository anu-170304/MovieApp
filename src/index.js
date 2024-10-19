// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional, if you have CSS
import App from "./App"; // Main component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Make sure it matches the <div id="root"></div> in index.html
);
