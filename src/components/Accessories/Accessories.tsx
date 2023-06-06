type Props = {
  accessoryLifts: boolean;
  setAccessoryLifts: (value: boolean) => void;
};

export const Accessories: React.FC<Props> = ({
  accessoryLifts,
  setAccessoryLifts,
}) => {
  return (
    <div className=" bg-white rounded-md shadow-lg md:h-3/4 md:w-3/4 h-auto fixed p-5 border">
      <button
        className="absolute top-4 right-4 text-lg"
        onClick={() => setAccessoryLifts(!accessoryLifts)}
      >
        &#10005;
      </button>
      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <h1 className="text-2xl mt-2">
          <b>Accessory Exercises</b>
        </h1>
        <div>
          <p className="md:mb-4 text-center text-md mt-2">
            To build more strength with your main lifts, accessory lifts are
            essential.
          </p>
          <p className="md:mt-2 text-center text-md">
            These lifts should be performed after the main lifts, doing sets of
            3 and reps of 10, pick a weight where you are almost failing on the
            10th rep.
          </p>
        </div>
        <div className="flex w-full md:justify-around flex-col md:flex-row text-center mt-2">
          <div className="md:mb-8 md:mt-4 mt-2">
            <h2 className="text-lg">
              <b>Deadlift:</b>
            </h2>
            <p className="text-sm">Straight Leg Deadlifts</p>
            <p className="text-sm">Bent Over Rows</p>
            <p className="text-sm">Lat Pull Downs</p>
          </div>
          <div className="md:mb-8 md:mt-4 mt-4">
            <h2 className="text-lg">
              <b>Squat:</b>
            </h2>
            <p className="text-sm">Leg Press</p>
            <p className="text-sm">Lunges</p>
            <p className="text-sm">Lying Leg Curls</p>
          </div>
          <div className="md:mb-8 md:mt-4 mt-4">
            <h2 className="text-lg">
              <b>Bench Press:</b>
            </h2>
            <p className="text-sm">Incline Dumbbell Press</p>
            <p className="text-sm">Body Weight Dips</p>
            <p className="text-sm">Skullcrushers</p>
          </div>
          <div className="md:mb-8 md:mt-4 mt-4">
            <h2 className="text-lg">
              <b>Bench Press:</b>
            </h2>
            <p className="text-sm">Seated Dumbbell Press</p>
            <p className="text-sm">Lateral Raises</p>
            <p className="text-sm">Tricep Extensions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
