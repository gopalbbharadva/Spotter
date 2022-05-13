import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { Provider } from "react-redux";
import store from "./store/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
