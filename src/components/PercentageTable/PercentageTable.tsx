import React from "react";
import { useState } from "react";

type PercentArray = number[];

type Week = {
  percentArray: PercentArray;
  liftPerc: {
    liftName: string;
    values: number[];
  }[];
};

type SelectWeek = {
  weekName: string[];
};

const selectWeek: SelectWeek[] = [
  {
    weekName: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
];

type ShowTable = boolean;

type Props = {
  week: Week[];
  showTable: ShowTable;
};

export const PercentageTable: React.FC<Props> = ({ week, showTable }) => {
  const [weekSelected, setWeekSelected] = useState<number>(0);

  const handleSelectedWeek = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = parseInt(event.target.value);
    setWeekSelected(selectOption);
  };

  return (
    <div>
      <div>
        <select name="training-weeks" onChange={handleSelectedWeek}>
          {selectWeek[0].weekName.map((week, i) => {
            return (
              <option key={i} value={i}>
                {week}
              </option>
            );
          })}
        </select>
      </div>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              {week[weekSelected].liftPerc.map((lift) => (
                <th key={lift.liftName}>{lift.liftName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week[weekSelected].liftPerc[0].values.map((value, i) => (
              <tr key={i}>
                <td>Set {i + 1}</td>
                {week[weekSelected].liftPerc.map((lift, j) => (
                  <td key={j}>{lift.values[i].toFixed(1)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
