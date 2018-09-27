import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/main.css";
import "./css/tablet.css";
import "./css/desktop.css";

render(<Router />, document.querySelector("#main"));
 