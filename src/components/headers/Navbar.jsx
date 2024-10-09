import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";

const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Products", href: "/products" },
  { id: 3, text: "About Us", href: "/about-us" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // get current path

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`absolute flex justify-between items-center h-24 w-full mx-auto px-6 text-gray-200 top-0 left-0 right-0 z-50 transition-colors duration-300 bg-gradient-to-r from-[#0b3e27] to-[#197149]`}
    >
      <Logo cssStyles={"text-2xl ml-3 font-bold"} />

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.id}
            className={`block p-2 m-2 cursor-pointer duration-300  hover:bg-[#005048] hover:bg-opacity-20	 ${
              location.pathname === item.href &&
              "border-b-2 border-[#b5c7c4] text-[#e6eceb]"
            }`}
          >
            {item.text}
          </a>
        ))}
      </ul>

      {/* Mobile Navbar Toggle */}
      <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar */}
      <ul
        className={
          nav
            ? `fixed md:hidden left-0 top-0 w-[60%] h-full  bg-gradient-to-r from-[#0b3e27] to-[#197149] ease-in-out duration-500 z-50 pt-2`
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <Logo
          cssStyles={"w-full text-2xl font-bold text-gray-100 m-4 ml-0 mr-auto"}
        />

        {navItems.map((item) => (
          <a
            href={item.href}
            onClick={() => setNav(false)}
            key={item.id}
            className={`block p-4  hover:bg-[#b5c7c4] hover:bg-opacity-20 duration-300 hover:text-black cursor-pointer m-2 ${
              location.pathname === item.href &&
              "bg-[#3f7169] bg-opacity-50 text-[#e6eceb]"
            }`}
          >
            {item.text}
          </a>
        ))}
      </ul>
    </div>
  );
}
