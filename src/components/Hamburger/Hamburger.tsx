import { faBoxOpen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { navName: "Home", link: "/" },
    { navName: "Program Select", link: "/program-select" },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer z-10 mr-4 mt-4 fixed right-0 top-0"
      >
        <FontAwesomeIcon icon={open ? faClose : faBoxOpen} size="xs" />
      </div>
      <div className={open ? "flex w-full h-full flex-row-reverse" : "hidden"}>
        <span className="w-full h-full bg-transparent-black fixed"></span>
        <div className="bg-white h-full w-72 fixed">
          <ul className=" relative ml-4 mt-4 top-10 ">
            {navItems.map((item, i) => {
              return (
                <li key={i} className="p-2 m-2">
                  <a href={item.link}>{item.navName}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
