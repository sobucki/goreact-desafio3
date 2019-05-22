import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

import "./reset.css";
import "./style.css";

import "font-awesome/css/font-awesome.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Routes />
        </Fragment>
      </Provider>
    );
  }
}
