import { ExerciseCard } from "../components/ExerciseCard";
import { BroSplitData } from "../Api/BroSplitData";
import { Hamburger } from "../components/Hamburger";

export const BroSplitPage = () => {
  const broSplitData = BroSplitData;

  return (
    <>
      <Hamburger />
      <div className="flex w-full h-full flex-col justify-center items-center">
        <span className="my-8 text-center">
          <h1 className="mb-4">Bro Split</h1>
          <p className="mb-4">
            The Bro Split is a common muscle building program.
          </p>
          <p className="mb-4">
            You train a specific muscle group each day, Arms, Shoulders, Legs,
            Back and Chest.
          </p>
          <p>
            Choose a muscle group you'd like to train and complete the exercises
            below. If you are unsure on how to preform an exercise watch the
            video.
          </p>
        </span>
        <ExerciseCard data={broSplitData} />
      </div>
    </>
  );
};
