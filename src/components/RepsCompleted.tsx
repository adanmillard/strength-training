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
    <div>
      <span className="flex flex-col justify-evenly ml-4">
        <p>Reps: {reps}</p>
        <p>Sets: {setCompleted}</p>
      </span>
      <span className="flex flex-col justify-center items-center">
        {setCompleted !== 1 ? (
          <button className=" pointer" onClick={decreaseSets}>
            Set Complete
          </button>
        ) : (
          <button
            className=" pointer"
            onClick={() => handleExerciseComplete(exerciseName)}
          >
            Exercise Complete
          </button>
        )}
      </span>
    </div>
  );
};
