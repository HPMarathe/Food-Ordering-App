import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "This is react"),
  React.createElement("h2", {}, "by hrushikesh"),
]);

// createroot is an API which was given by ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

//this is how we render an element
root.render(parent);
