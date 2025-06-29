import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
setInterval(() => {
  root.render(<Home counter={counter} />);
  counter++;
}, 1000);
