import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3> location : Mumbai</h3> <h4>contact @hrushikesh</h4>
    </div>
  );
};

export default User;
