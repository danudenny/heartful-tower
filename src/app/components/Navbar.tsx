"use client";
import { SetStateAction, useState } from "react";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "Insight", "Facilities", "News"];

  const handleItemClick = (item: SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <nav className="flex justify-between items-center relative z-auto">
      <div>
        <h1 className="font-black text-2xl text-white shadow-black cursor-pointer">
          Logo
        </h1>
      </div>
      <div>
        <ul className="flex justify-between gap-5 rounded-full px-3 py-2 border-2 border-blue-400 cursor-pointer items-center bg-white">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`hover:bg-primary hover:text-white transition-all duration-300 ease-in-out rounded-full px-5 py-2 ${
                activeItem === item ? "bg-primary text-white" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="hover:bg-success-alt hover:text-white transition-all duration-300 ease-in-out rounded-full px-5 py-2 bg-success text-white shadow">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
