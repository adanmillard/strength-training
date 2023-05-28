type Props = {
  accessoryLifts: boolean;
  setAccessoryLifts: (value: boolean) => void;
};

export const Accessories: React.FC<Props> = ({
  accessoryLifts,
  setAccessoryLifts,
}) => {
  return (
    <div className=" bg-white rounded-md shadow-lg h-3/4 w-3/4 fixed p-5 border">
      <button
        className="absolute top-4 right-4 text-lg"
        onClick={() => setAccessoryLifts(!accessoryLifts)}
      >
        &#10005;
      </button>
      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <h1>Accessory Exercises </h1>
        <div>
          <p className="mx-20 text-center">
            To build more strength with your main lifts, accessory lifts are
            essential.
          </p>
          <p className="mx-20 text-center">
            These lifts should be performed after the main lifts, doing sets of
            3 and reps of 10, pick a weight where you are almost failing on the
            10th rep.
          </p>
        </div>
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
      </div>
    </div>
  );
};
