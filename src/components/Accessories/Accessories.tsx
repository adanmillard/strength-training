import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Accessories = () => {
  const [showAccessory, setShowAccessory] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <h1 onClick={() => setShowAccessory(!showAccessory)}>
          Accessory Exercises{" "}
          <FontAwesomeIcon
            icon={showAccessory ? faChevronUp : faChevronDown}
            size="xs"
          />
        </h1>
      </div>
      {showAccessory && (
        <>
          <p className="mx-20 text-center">
            To build more strength with your main lifts, accessory lifts are
            essential.
          </p>
          <p className="mx-20 text-center">
            These lifts should be performed after the main lifts, doing sets of
            3 and reps of 10, pick a weight where you are almost failing on the
            10th rep.
          </p>
          <div className="flex w-full justify-around">
            <div className="mb-8 mt-4">
              <h2>Deadlift:</h2>
              <p>Straight Leg Deadlifts</p>
              <p>Bent Over Rows</p>
              <p>Lat Pull Downs</p>
            </div>
            <div className="mb-8 mt-4">
              <h2>Squat:</h2>
              <p>Leg Press</p>
              <p>Lunges</p>
              <p>Lying Leg Curls</p>
            </div>
            <div className="mb-8 mt-4">
              <h2>Bench Press:</h2>
              <p>Incline Dumbbell Press</p>
              <p>Body Weight Dips</p>
              <p>Skullcrushers</p>
            </div>
            <div className="mb-8 mt-4">
              <h2>Overhead Press:</h2>
              <p>Seated Dumbbell Press</p>
              <p>Lateral Raises</p>
              <p>Tricep Extensions</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
