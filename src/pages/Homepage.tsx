import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/program-select");
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-green-500 text-4xl">Strength Training</h1>
        <h1>Calc</h1>
      </div>
      <div>
        <button onClick={handleNavigate}>Get Started</button>
      </div>
    </>
  );
};
