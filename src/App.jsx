import React from "react";
import ReactDOM from "react-dom";
import AIC from "./AIC";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <AIC />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
