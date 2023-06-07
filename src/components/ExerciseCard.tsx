import React, { useState } from "react";

type Exercise = {
  name: string;
  reps: number | string;
  sets: number;
};

type MuscleGroup = {
  exercises: Exercise[];
};

type BroSplitData = {
  [muscleGroup: string]: MuscleGroup;
};

export const ExerciseCard: React.FC<{ data: BroSplitData }> = ({ data }) => {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [selectMuscleGroup, setSelectMuscleGroup] = useState<string | null>(
    null
  );

  const handleExerciseComplete = (exerciseName: string) => {
    setCompletedExercises((prevCompletedExercises) =>
      prevCompletedExercises.concat(exerciseName)
    );
  };

  return (
    <>
      <div>
        <select onChange={(event) => setSelectMuscleGroup(event.target.value)}>
          <option value="">Select Muscle Group</option>
          {Object.keys(data).map((muscleGroup) => {
            return (
              <option key={muscleGroup} value={muscleGroup}>
                {muscleGroup}
              </option>
            );
          })}
        </select>
        {selectMuscleGroup && (
          <div>
            {data[selectMuscleGroup].exercises.map((exercise, i) => {
              if (completedExercises.includes(exercise.name)) {
                return null;
              }

              return (
                <div key={i}>
                  <p>Exercise: {exercise.name}</p>
                  <p>Reps: {exercise.reps}</p>
                  <p>Sets: {exercise.sets}</p>
                  <input
                    type="checkbox"
                    onClick={() => handleExerciseComplete(exercise.name)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
