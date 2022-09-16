// Import react modules
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Import App component as main component
import App from "./App";

// Render frontend
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
