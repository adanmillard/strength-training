import React from "react";

type Exercise = {
  name: string;
  reps: number;
  sets: number;
};

type MuscleGroup = {
  exercises: Exercise[];
};

type BroSplitData = {
  [muscleGroup: string]: MuscleGroup;
};

export const ExerciseCard: React.FC<{ data: BroSplitData }> = ({ data }) => {
  return (
    <>
      <div>
        {Object.entries(data).map(([muscleGroup, { exercises }]) => {
          return (
            <div key={muscleGroup}>
              {exercises.map((exercise, i) => {
                return (
                  <div key={i}>
                    <p>Exercise: {exercise.name}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
