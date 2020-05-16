import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));