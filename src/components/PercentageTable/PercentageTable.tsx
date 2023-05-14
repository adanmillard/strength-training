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
    <div className="flex flex-col justify-center items-center">
      <div className="mb-6">
        <select
          name="training-weeks"
          className="border rounded p-2 shadow w-36 text-center"
          onChange={handleSelectedWeek}
        >
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
        <table className="w-4/5 border shadow rounded">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th>&nbsp;</th>
              {week[weekSelected].liftPerc.map((lift) => (
                <th key={lift.liftName} className="text-sm p-3">
                  {lift.liftName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week[weekSelected].liftPerc[0].values.map((value, i) => (
              <tr key={i}>
                <td className="text-center font-bold">Set {i + 1}:</td>
                {week[weekSelected].liftPerc.map((lift, j) => (
                  <td className="text-center p-3 text-sm" key={j}>
                    {lift.values[i].toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
