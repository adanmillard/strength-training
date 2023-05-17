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
    <>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer"
        >
          <FontAwesomeIcon icon={open ? faClose : faBoxOpen} size="xs" />
        </div>
        <ul className="">
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link}>{item.navName}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
