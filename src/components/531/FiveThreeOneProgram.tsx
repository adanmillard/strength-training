import { PercentageTable } from "../PercentageTable/PercentageTable";
import { useState } from "react";

type LiftInputs = {
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
  const [liftInputs, setLiftInputs] = useState<LiftInputs>(initialLiftInputs);
  const [week, setWeek] = useState(defaultWeeks);
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
    if (
      liftInputs.deadlift !== 0 &&
      liftInputs.bench !== 0 &&
      liftInputs.overhead !== 0 &&
      liftInputs.squat !== 0
    ) {
      setLiftValues(false);
    } else {
      setShowTable(false);
      setLiftValues(true);
    }
  };

  const handleCalculateClick = () => {
    const newWeeks = week.map((week) => ({
      percentArray: week.percentArray,
      liftPerc: [
        { liftName: "Deadlift", values: calculateWeekValues(week, "deadlift") },
        { liftName: "Squat", values: calculateWeekValues(week, "squat") },
        { liftName: "Bench", values: calculateWeekValues(week, "bench") },
        {
          liftName: "Overhead Press",
          values: calculateWeekValues(week, "overhead"),
        },
      ],
    }));
    setWeek(newWeeks);
    setShowTable(true);
    checkInputValue();
  };

  return (
    <div>
      <div>
        <h1>5 / 3 / 1 Strength Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          suscipit, optio blanditiis qui dicta dolore nisi nemo voluptate nam
          aliquid saepe, quaerat aut et asperiores. Provident sequi ut nihil at.
        </p>
      </div>
      <div>
        <label>1RM Deadlift</label>
        <input
          type="number"
          name="deadlift"
          value={liftInputs.deadlift}
          onChange={handleInputChange}
        />
        <label>1RM Squat</label>
        <input
          type="number"
          name="squat"
          value={liftInputs.squat}
          onChange={handleInputChange}
        />
        <label>1RM Bench Press</label>
        <input
          type="number"
          name="bench"
          value={liftInputs.bench}
          onChange={handleInputChange}
        />
        <label>1RM Overhead Press</label>
        <input
          type="number"
          name="overhead"
          value={liftInputs.overhead}
          onChange={handleInputChange}
        />
        <button onClick={handleCalculateClick}>Go</button>
      </div>
      {liftValues && (
        <div>
          <h1>
            One or more of your lifts are not entered, please input your one rep
            max for each lift.
          </h1>
        </div>
      )}
      {showTable && (
        <div>
          <PercentageTable week={week} showTable={showTable} />
        </div>
      )}
    </div>
  );
};
