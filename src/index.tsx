import "./assets/styles/styles.scss";
import ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import configureStore from "./redux/store";
import App from "./App";

const store = configureStore();
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
