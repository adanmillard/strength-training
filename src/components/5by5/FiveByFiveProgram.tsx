import { useState } from "react";
import { RMInputs } from "../RMInputs/RMInputs";

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
    percentArray: [0.5, 0.5, 0.5, 0.5, 0.5],
    liftPerc: [],
  },
  {
    percentArray: [0.5, 0.5, 0.5, 0.5, 0.5],
    liftPerc: [],
  },
];

export const FiveByFiveProgram = () => {
  const [week, setWeek] = useState(defaultWeeks);

  return (
    <>
      <div>5x5</div>
      <RMInputs week={week} setWeek={setWeek} />
    </>
  );
};
