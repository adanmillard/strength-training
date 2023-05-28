import { useState } from "react";
import { RMInputs } from "../RMInputs/RMInputs";
import { Hamburger } from "../Hamburger/Hamburger";
import { Accessories } from "../Accessories/Accessories";

type PercentArray = number[];

type Week = {
  percentArray: PercentArray;
  liftPerc: {
    liftName: string;
    values: number[];
  }[];
};

const defaultWeeks: Week[] = [
  {
    percentArray: [0.75, 0.75, 0.75, 0.75, 0.75],
    liftPerc: [],
  },
  {
    percentArray: [0.8, 0.8, 0.8, 0.8, 0.8],
    liftPerc: [],
  },
  {
    percentArray: [0.85, 0.85, 0.85, 0.85, 0.85],
    liftPerc: [],
  },
  {
    percentArray: [0.7, 0.75, 0.8, 0.85, 0.9],
    liftPerc: [],
  },
  {
    percentArray: [0.5, 0.5, 0.5, 0.5, 0.5],
    liftPerc: [],
  },
];

export const FiveByFiveProgram = () => {
  const [week, setWeek] = useState(defaultWeeks);
  const [accessoryLifts, setAccessoryLifts] = useState(false);

  return (
    <>
      {accessoryLifts && (
        <div className="flex justify-center items-center h-full w-full absolute z-10">
          <Accessories
            accessoryLifts={accessoryLifts}
            setAccessoryLifts={setAccessoryLifts}
          />
        </div>
      )}
      <Hamburger />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-6">
          <b>5 X 5 Strength Training</b>
        </h1>
        <p className="mb-4 text-center mx-6 w-4/5 text-lg">
          The 5x5 workout is a strength and muscle building program that's been
          around for over 60 years. It consists of compound barbell exercises
          like the Squat, Bench and Deadlift for 5 sets of 5 reps. The goal of
          each 5x5 workout is to increase the weight over time.
        </p>
        <p className="mb-4 text-center mx-6 w-4/5 text-lg">
          You do four workouts a week. The 5x5 workout has been popular for
          decades because it's simple, time-efficient, and very effective for
          gaining strength and muscle mass.
        </p>
        <p className="mb-2 text-center w-4/5 text-lg">
          Enter your 1RM into the calculator to see what your percentage based
          lifts will be, enter KG or LBS, lifts are percentage based.
        </p>
      </div>
      <RMInputs week={week} setWeek={setWeek} />
      <div className="flex justify-center my-4  ">
        <p>
          Along with the four key lifts, Accessory lifts are also necessary to
          gaining strength. Here are some{" "}
          <button
            className="text-blue-500"
            onClick={() => setAccessoryLifts(!accessoryLifts)}
          >
            Accessory Exercises
          </button>{" "}
          you can use to complement your workout.
        </p>
      </div>
    </>
  );
};
