import { ExerciseCard } from "../components/ExerciseCard";
import { BroSplitData } from "../Api/BroSplitData";
import { Hamburger } from "../components/Hamburger";

export const BroSplitPage = () => {
  const broSplitData = BroSplitData;

  return (
    <>
      <Hamburger />
      <ExerciseCard data={broSplitData} />
    </>
  );
};
