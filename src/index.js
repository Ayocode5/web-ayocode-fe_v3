import React from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";

import store from "./config/redux/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
