import { useState } from "react";

export const Accessories = () => {
  const [showAccessory, setShowAccessory] = useState(false);

  return (
    <div>
      <div>
        <h1 onClick={() => setShowAccessory(!showAccessory)}>
          Accessory Exercises
        </h1>
      </div>
      {showAccessory && (
        <div>
          <div>
            <h2>Deadlift</h2>
            <p>Straight Leg Deadlifts</p>
            <p>Lat Pull Downs</p>
          </div>
          <div>
            <h2>Bench Press</h2>
            <p>Incline Dumbbell Press</p>
            <p>Body Weight Dips</p>
          </div>
          <div>
            <h2>Squats</h2>
            <p>Leg Press</p>
            <p>Lunges</p>
          </div>
          <div>
            <h2>Overhead Press</h2>
            <p>Bent Over Rows</p>
            <p>Push Ups</p>
          </div>
        </div>
      )}
    </div>
  );
};
