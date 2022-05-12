import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
