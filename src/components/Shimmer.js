import React from "react";
const Trial = () => {
  return (
    <div className="w-72 h-80 m-4 p-4 shadow-lg rounded-xl bg-rose-200">
      <div className="h-48 w-64 mb-4 rounded-xl bg-rose-100"></div>
      <p className="h-4 w-36 my-2 rounded-2xl bg-rose-100"></p>
      <p className="h-4 w-44 my-2 rounded-2xl bg-rose-100"></p>
      <p className="h-4 w-32 my-2 rounded-2xl bg-rose-100"></p>
      <p className="h-4 w-16 my-2 rounded-2xl bg-rose-100"></p>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-pink-50">
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
      <Trial />
    </div>
  );
};

export default Shimmer;
