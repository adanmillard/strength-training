import axios from "axios";
import { useState } from "react";

type ExerciseData = {
  difficulty: string;
  equipment: string;
  instructions: string;
  muscle: string;
  name: string;
  type: string;
}[];

export const ExercisesPage = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData | null>(null);
  const exerciseAPI = process.env.REACT_APP_EXERCISE_API_KEY;

  const getExercises = () => {
    axios
      .get(
        `https://api.api-ninjas.com/v1/exercises?muscle=biceps&type=powerlifting`,
        {
          headers: {
            "X-Api-Key": `${exerciseAPI}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res: { data: any }) => {
        console.log(res.data);
        setExerciseData(res.data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={getExercises}>Get Exercises</button>

      <div>
        {exerciseData?.map((exercise, i) => {
          return (
            <div key={i}>
              <p>{exercise.difficulty}</p>
              <p>{exercise.equipment}</p>
              <p>{exercise.instructions}</p>
              <p>{exercise.muscle}</p>
              <p>{exercise.name}</p>
              <p>{exercise.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
