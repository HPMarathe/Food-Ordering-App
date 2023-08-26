import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Welcome using JSX
  </h1>
);

const HeadingComponent = () => (
  // Using react fragments here.
  <>
    <div className="container">
      <Title />
      <h1 className="heading">Functional component</h1>
      <div className="container1"></div>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
