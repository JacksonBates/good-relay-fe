import React from "react";
import { render } from "react-dom";
import "@babel/polyfill";

import "./styles/styles.css";

import Component from "./Component";

const App = () => <Component />;

render(<App />, document.getElementById("root"));
