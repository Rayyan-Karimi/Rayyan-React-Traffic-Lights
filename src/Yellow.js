import React from "react";

const Yellow = ({ isActive }) => {
  return (
    <div
      className={`circle h-16 w-16 m-4 rounded-full ${
        isActive ? `bg-yellow-400` : "bg-slate-500"
      }`}
    ></div>
  );
};

export default Yellow;