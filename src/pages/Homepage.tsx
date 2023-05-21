import { NavBar } from "../components/Navbar/NavBar";

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center h-screen items-center">
        <h1>Strength Training</h1>
        <h1>Helper</h1>
      </div>
    </>
  );
};
