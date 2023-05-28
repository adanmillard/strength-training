import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const navItems = [
    {
      itemName: "Exercises",
      link: "/exercises",
    },
    {
      itemName: "About",
      link: "/",
    },
  ];

  const handleNavigate = () => {
    navigate("/program-select");
  };

  return (
    <>
      <nav className="flex justify-between h-20 items-center shadow-md fixed w-full">
        <div className="ml-4">
          <h2>Training Buddy</h2>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon
            icon={open ? faClose : faBars}
            size="xs"
            className="hover:text-gray-500"
          />
        </div>
        <div className=" w-1/3">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 shadow-md" : "top-[-490px]"
            } justify-evenly`}
          >
            {navItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className="md:ml-8  md:my-0 my-7 hover:text-gray-500"
                >
                  <a href={item.link}>{item.itemName}</a>
                </li>
              );
            })}
            <button
              className="btn mt-0 w-32 mx-0 md:mx-4 hover:text-gray-500"
              onClick={handleNavigate}
            >
              Get Started
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
