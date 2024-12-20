import React, { useState, useEffect } from "react";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";

const Traffic = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          switch (activeLight) {
            case "red":
              setActiveLight("green");
              return 3;
            case "green":
              setActiveLight("yellow");
              return 2;
            case "yellow":
              setActiveLight("red");
              return 5;
            default:
              break;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeLight]);

  return (
    <div>
      <div className="mt-6 bg-black h-80 w-30 rounded-2xl flex flex-col items-center justify-center">
        <Red isActive={activeLight === "red"} />
        <Yellow isActive={activeLight === "yellow"} />
        <Green isActive={activeLight === "green"} />
      </div>
      <p className="text-lg font-bold">{timer} Seconds</p>
    </div>
  );
};

export default Traffic;
