import { ExerciseCard } from "../components/ExerciseCard";
import { BroSplitData } from "../Api/BroSplitData";
import { Hamburger } from "../components/Hamburger";

export const BroSplitPage = () => {
  const broSplitData = BroSplitData;

  return (
    <>
      <Hamburger />
      <div className="flex w-full h-full flex-col justify-center items-center">
        <h1>Bro Split</h1>
        <ExerciseCard data={broSplitData} />
      </div>
    </>
  );
};
