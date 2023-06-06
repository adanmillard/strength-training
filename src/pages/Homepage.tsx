import { NavBar } from "../components/NavBar";

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center h-screen items-center ">
        <h1>
          <b>Training Buddy</b>
        </h1>
        <p className="my-2">
          Thought about starting the gym but didn't know how?
        </p>
        <p className="my-2">
          Look no further, Training Buddy is here to help, with beginner
          friendly workouts to help get you into the gym and achieve your goals!
        </p>
        <p className="my-2">
          With Strength Training, Muscle Building and Weight Loss. Training
          Buddy is here to help you{" "}
          <a href="/program-select" className="text-blue-500">
            get started
          </a>
          .
        </p>
      </div>
    </>
  );
};
