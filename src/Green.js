import React from "react";

const Green = ({ isActive }) => {
  return (
    <div
      className={`circle h-16 w-16 m-4 rounded-full ${
        isActive ? `bg-green-500` : "bg-slate-500"
      }`}
    ></div>
  );
};

export default Green;
