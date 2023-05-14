import { useNavigate } from "react-router-dom";

export const ProgramSelect = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/5/3/1-training");
  };

  return (
    <>
      <div className="center-page-col">
        <h1>Select your program:</h1>
        <button onClick={handleNavigate} className="btn">
          5/3/1
        </button>
        <button className="btn">Training 2</button>
        <button className="btn">Training 3</button>
        <button className="btn">Training 4</button>
        <button className="btn">Training 5</button>
        <button className="btn">Single Lifts</button>
      </div>
    </>
  );
};
