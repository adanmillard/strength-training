import React from "react";
import { useNavigate } from "react-router-dom";

export const ProgramSelect = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/5/3/1-training");
  };

  return (
    <div>
      <div>
        <h1>Select your program:</h1>
        <button onClick={handleNavigate}>5/3/1</button>
      </div>
    </div>
  );
};
