import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./_reducers";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

ReactDOM.render(
  <Provider
    store={createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(promiseMiddleware, ReduxThunk))
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
