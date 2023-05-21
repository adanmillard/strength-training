import { useState } from "react";
import { PercentageTable } from "../PercentageTable/PercentageTable";
import { Accessories } from "../Accessories/Accessories";

type LiftInputs = {
  [key: string]: number;
  deadlift: number;
  squat: number;
  bench: number;
  overhead: number;
};

const initialLiftInputs: LiftInputs = {
  deadlift: 0,
  squat: 0,
  overhead: 0,
  bench: 0,
};

type PercentArray = number[];

type Week = {
  percentArray: PercentArray;
  liftPerc: {
    liftName: string;
    values: number[];
  }[];
};

type Props = {
  week: Week[];
  setWeek: React.Dispatch<React.SetStateAction<Week[]>>;
};

export const RMInputs: React.FC<Props> = ({ week, setWeek }) => {
  const [liftInputs, setLiftInputs] = useState<LiftInputs>(initialLiftInputs);
  const [showTable, setShowTable] = useState(false);
  const [liftValues, setLiftValues] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLiftInputs((prevInputs) => ({
      ...prevInputs,
      [name]: parseFloat(value),
    }));
  };

  const calculateWeekValues = (week: Week, liftName: keyof LiftInputs) => {
    const liftValue = liftInputs[liftName];
    return week.percentArray.map((percent) => percent * liftValue);
  };

  const checkInputValue = () => {
    const inputFields = ["deadlift", "bench", "overhead", "squat"];

    for (const field of inputFields) {
      if (
        liftInputs[field] === 0 ||
        liftInputs[field] === null ||
        Number.isNaN(liftInputs[field])
      ) {
        setShowTable(false);
        setLiftValues(true);
        return;
      }
    }

    setLiftValues(false);
  };

  const handleCalculateClick = () => {
    const newWeeks = week.map((week) => ({
      percentArray: week.percentArray,
      liftPerc: [
        {
          liftName: "Deadlift",
          values: calculateWeekValues(week, "deadlift"),
        },
        { liftName: "Squat", values: calculateWeekValues(week, "squat") },
        { liftName: "Bench", values: calculateWeekValues(week, "bench") },
        {
          liftName: "Overhead",
          values: calculateWeekValues(week, "overhead"),
        },
      ],
    }));
    setWeek(newWeeks);
    setShowTable(true);
    checkInputValue();
  };

  return (
    <>
      <div className="flex flex-col mt-6 mb-6">
        <div className="flex justify-center">
          <div className="flex flex-col items-start">
            <label className="mr-4 mt-2" htmlFor="deadlift">
              <b>1RM Deadlift:</b>
            </label>
            <label className="mr-4 mt-2" htmlFor="squat">
              <b>1RM Squat:</b>
            </label>
            <label className="mr-4 mt-2" htmlFor="bench">
              <b>1RM Bench Press:</b>
            </label>
            <label className="mr-4 mt-2" htmlFor="overhead">
              <b>1RM Overhead Press:</b>
            </label>
          </div>
          <div className="flex flex-col  items-center">
            <input
              type="number"
              name="deadlift"
              value={liftInputs.deadlift}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="squat"
              value={liftInputs.squat}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="bench"
              value={liftInputs.bench}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="overhead"
              value={liftInputs.overhead}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn self-center" onClick={handleCalculateClick}>
          Go
        </button>
      </div>
      {liftValues && (
        <div className="flex justify-center">
          <p className="text-red-600 mb-4">
            One or more of your lifts are not entered, please input your one rep
            max for each lift.
          </p>
        </div>
      )}
      {showTable && <PercentageTable week={week} showTable={showTable} />}
      <Accessories />
    </>
  );
};
