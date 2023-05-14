import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/program-select");
  };

  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center">
        <h1>Strength Training</h1>
        <h1>Helper</h1>
        <button onClick={handleNavigate} className="btn">
          Get Started
        </button>
      </div>
    </>
  );
};
