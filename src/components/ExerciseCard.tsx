import React, { useState } from "react";

type Exercise = {
  name: string;
  reps: number | string;
  sets: number;
  src?: string;
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
  const [exerciseVideos, setExerciseVideos] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExerciseVideo = (exerciseName: string) => {
    setExerciseVideos((prevExerciseVideos) => ({
      ...prevExerciseVideos,
      [exerciseName]: !prevExerciseVideos[exerciseName],
    }));
  };

  const handleExerciseComplete = (exerciseName: string) => {
    setCompletedExercises((prevCompletedExercises) =>
      prevCompletedExercises.concat(exerciseName)
    );
  };

  return (
    <>
      <div className="w-4/5 flex flex-col justify-center items-center">
        <select
          onChange={(event) => setSelectMuscleGroup(event.target.value)}
          className="border rounded p-2 shadow w-auto"
        >
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
          <div className="w-4/5 flex flex-col justify-center items-center">
            {data[selectMuscleGroup].exercises.map((exercise, i) => {
              if (completedExercises.includes(exercise.name)) {
                return null;
              }

              return (
                <div
                  key={i}
                  className="shadow-md p-4 flex justify-around my-4 bg-gray-100 rounded-md w-2/3"
                >
                  <div className=" w-52 h-auto">
                    <p className="">Exercise: {exercise.name}</p>
                    <button onClick={() => toggleExerciseVideo(exercise.name)}>
                      {exerciseVideos[exercise.name] ? "Close" : "View"}{" "}
                      Exercise Tutorial
                    </button>
                    {exerciseVideos[exercise.name] && (
                      <div className=" w-4/5 h-auto mr-8">
                        <iframe
                          src={exercise.src}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    )}
                  </div>
                  <span className="flex flex-col justify-evenly ml-4">
                    <p>Reps: {exercise.reps}</p>
                    <p>Sets: {exercise.sets}</p>
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <button
                      id={exercise.name + " completed"}
                      className=" pointer"
                      onClick={() => handleExerciseComplete(exercise.name)}
                    >
                      Completed
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
