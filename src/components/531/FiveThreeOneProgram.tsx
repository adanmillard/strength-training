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
    percentArray: [0.65, 0.75, 0.85, 0.7],
    liftPerc: [],
  },
  {
    percentArray: [0.7, 0.8, 0.9, 0.75],
    liftPerc: [],
  },
  {
    percentArray: [0.75, 0.85, 0.95, 0.8],
    liftPerc: [],
  },
  {
    percentArray: [0.4, 0.5, 0.6, 0.45],
    liftPerc: [],
  },
];

export const FiveThreeOneProgram = () => {
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
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center md:my-6 text-2xl mb-4 mt-12">
          <b>5 / 3 / 1 Strength Training</b>
        </h1>
        <p className="mb-4 text-center md:mx-6 md:w-4/5 md:text-lg text-md mx-2">
          The 5/3/1 workout is a powerlifting program designed by powerlifter
          Jim Wendler. The key concept is to slowly build strength through four
          barbell weightlifting exercises: the parallel squat, bench press,
          deadlift, and the shoulder press, also known as overhead press or
          military press. The goal of the 5/3/1 workout is to achieve a new one
          rep max (1RM).
        </p>
        <p className="mb-2 text-center md:w-4/5 mx-2 md:text-lg text-md">
          Enter your 1RM into the calculator to see what your percentage based
          lifts will be, enter KG or LBS, lifts are percentage based.
        </p>
      </div>
      <RMInputs week={week} setWeek={setWeek} />
      <div className="flex justify-center my-4  ">
        <p className="mb-2 text-center md:w-4/5 mx-2 md:text-lg text-md">
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
