import { PercentageTable } from "../PercentageTable/PercentageTable";
import { useState } from "react";

export const FiveThreeOneProgram = () => {
  const [squat, setSquat] = useState<number>(0);
  const [deadlift, setDeadlift] = useState<number>(0);
  const [bench, setBench] = useState<number>(0);
  const [overhead, setOverhead] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "deadlift":
        setDeadlift(Number(value));
        break;
      case "bench":
        setBench(Number(value));
        break;
      case "overhead":
        setOverhead(Number(value));
        break;
      case "squat":
        setSquat(Number(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    console.log(deadlift, squat, bench, overhead);
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
          value={deadlift}
          onChange={handleInputChange}
        />
        <label>1RM Squat</label>
        <input
          type="number"
          name="squat"
          value={squat}
          onChange={handleInputChange}
        />
        <label>1RM Bench Press</label>
        <input
          type="number"
          name="bench"
          value={bench}
          onChange={handleInputChange}
        />
        <label>1RM Overhead Press</label>
        <input
          type="number"
          name="overhead"
          value={overhead}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Go</button>
      </div>
      <div>
        <PercentageTable />
      </div>
    </div>
  );
};
