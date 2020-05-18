import React from "react";
import {Route, Router, Link, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import ReactDOM from "react-router-dom";
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));