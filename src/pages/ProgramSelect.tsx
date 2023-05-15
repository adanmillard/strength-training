import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProgramSelect = () => {
  const [strength, setStrength] = useState(false);
  const [weightLoss, setweightLoss] = useState(false);
  const [buildMuscle, setBuildMuscle] = useState(false);

  let navigate = useNavigate();

  const navigateFiveThreeOne = () => {
    navigate("/5/3/1-training");
  };

  const navigateFiveByFive = () => {
    navigate("/5X5-training");
  };

  return (
    <>
      <div className="center-page-col">
        <h1>Select your type of Training:</h1>
        <button className="btn" onClick={() => setStrength(!strength)}>
          Strength
        </button>
        {strength && (
          <>
            <button
              onClick={navigateFiveThreeOne}
              className="btn bg-red-600 text-white"
            >
              5/3/1
            </button>
            <button
              className="btn bg-red-600 text-white"
              onClick={navigateFiveByFive}
            >
              5 X 5
            </button>
            <button className="btn bg-red-600 text-white">Single Lifts</button>
          </>
        )}
        <button className="btn" onClick={() => setBuildMuscle(!buildMuscle)}>
          Build Muscle
        </button>
        {buildMuscle && (
          <>
            <button className="btn bg-green-600 text-white">Bro Split</button>
            <button className="btn bg-green-600 text-white">Push / Pull</button>
          </>
        )}
        <button className="btn" onClick={() => setweightLoss(!weightLoss)}>
          Weight Loss
        </button>
        {weightLoss && (
          <>
            <button className="btn bg-blue-600 text-white">
              General Fitness
            </button>
            <button className="btn bg-blue-600 text-white">
              Basic Weight Workout
            </button>
          </>
        )}
      </div>
    </>
  );
};
