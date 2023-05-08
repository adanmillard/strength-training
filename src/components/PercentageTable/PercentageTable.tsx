import React from "react";

type PercentArray = number[];

type Week = {
  percentArray: PercentArray;
  liftPerc: {
    liftName: string;
    values: number[];
  }[];
};

type ShowTable = boolean;

type Props = {
  week: Week[];
  showTable: ShowTable;
};

export const PercentageTable: React.FC<Props> = ({ week, showTable }) => {
  // console.log(week[0]);
  return (
    <div>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              {week[0].liftPerc.map((lift) => (
                <th key={lift.liftName}>{lift.liftName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week.map((week, i) => (
              <tr key={i}>
                <td>Set {i + 1}</td>
                {week.liftPerc.map((lift, j) => (
                  <td key={j}>{lift.values[0]} KG</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
