import { useState } from "react";
import { RMInputs } from "../RMInputs/RMInputs";
import { Hamburger } from "../Hamburger/Hamburger";

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

  return (
    <>
      <Hamburger />
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-center my-6">
          <b>5 / 3 / 1 Strength Training</b>
        </h1>
        <p className="mb-4 text-center mx-6 w-4/5 text-lg">
          The 5/3/1 workout is a powerlifting program designed by powerlifter
          Jim Wendler. The key concept is to slowly build strength through four
          barbell weightlifting exercises: the parallel squat, bench press,
          deadlift, and the shoulder press, also known as overhead press or
          military press. The goal of the 5/3/1 workout is to achieve a new one
          rep max (1RM).
        </p>
        <p className="mb-2 text-center w-4/5 text-lg">
          Enter your 1RM into the calculator to see what your percentage based
          lifts will be, enter KG or LBS, lifts are percentage based.
        </p>
      </div>
      <RMInputs week={week} setWeek={setWeek} />
    </>
  );
};
