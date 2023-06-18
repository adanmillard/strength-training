import { useState } from "react";

type Props = {
  reps: number | string;
  sets: number;
  exerciseName: string;
  handleExerciseComplete: (value: string) => void;
};

export const RepsCompleted: React.FC<Props> = ({
  reps,
  sets,
  handleExerciseComplete,
  exerciseName,
}) => {
  const [setCompleted, setSetCompleted] = useState(sets);

  const decreaseSets = () => {
    setSetCompleted(setCompleted - 1);
  };

  return (
    <div className="flex justify-between items-center w-1/2">
      <div className="flex flex-col justify-evenly ml-4">
        <p className="mb-2">Reps: {reps}</p>
        <p className="mt-2">Sets: {setCompleted}</p>
      </div>
      <div className="">
        {setCompleted !== 1 ? (
          <button className=" pointer" onClick={decreaseSets}>
            Complete Set
          </button>
        ) : (
          <button
            className=" pointer"
            onClick={() => handleExerciseComplete(exerciseName)}
          >
            Complete Exercise
          </button>
        )}
      </div>
    </div>
  );
};
