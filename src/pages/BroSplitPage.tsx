import { ExerciseCard } from "../components/ExerciseCard";
import { BroSplitData } from "../Api/BroSplitData";

export const BroSplitPage = () => {
  const broSplitData = BroSplitData;

  return (
    <div>
      <ExerciseCard data={broSplitData} />
    </div>
  );
};
