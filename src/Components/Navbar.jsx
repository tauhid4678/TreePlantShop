import React, { useState } from "react";
import { Leaf, CircleX, Menu } from "lucide-react";
import { GiLindenLeaf } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <div className="bg-green-700 p-1 rounded-[50%] text-xl text-white ">
          <GiLindenLeaf size={24} />
        </div>
        <h1 className="font-semibold ml-2 text-xl md:text-2xl text-green-700 delius-swash-caps-regular">
          <a href="/">GreenNest</a>
        </h1>
      </div>

      <ul className="hidden md:flex gap-6 text-lg font-semibold delius-swash-caps-regular ">
        <a className="hover:text-green-600 hover:text-xl" href="./">
          Home
        </a>
        <a className="hover:text-green-600 hover:text-xl" href="./plants">
          Plants
        </a>
        <a className="hover:text-green-600 hover:text-xl" href="./profile">
          My Profile
        </a>
      </ul>
      {/* desktop github button */}
      <div className="hidden md:flex items-center">
        <button
          onClick={() => window.open("./login", "_blank")}
          className="w-30 md:w-30 h-10 text-lg md:h-12 flex items-center justify-center gap-2 border-solid border-black delius-swash-caps-regular font-bold rounded-xl hover:bg-green-600 hover:text-white hover:text-xl"
        >
          Login
        </button>
        <button
          onClick={() => window.open("./register", "_blank")}
          className="w-30 md:w-30 h-10 text-lg md:h-12 flex items-center justify-center gap-2  delius-swash-caps-regular font-bold rounded-xl hover:bg-green-600 hover:text-white hover:text-xl"
        >
          Register
        </button>
      </div>
      {/* menu for mobile */}
      <div className="md:hidden">
        <button
          className="text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CircleX /> : <Menu />}
        </button>
      </div>
      {/* mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 text-lg font-medium md:hidden z-50">
          <a
            className="hover:text-green-600 delius-swash-caps-regular"
            href="./"
          >
            Home
          </a>
          <a
            className="hover:text-green-600 delius-swash-caps-regular"
            href="./plants"
          >
            Plants
          </a>
          <a
            className="hover:text-green-600 delius-swash-caps-regular"
            href="./profile"
          >
            My Profile
          </a>
          <button
            onClick={() => window.open("./login", "_blank")}
            className="w-30 text-lg h-12 flex items-center justify-center gap-2 font-bold rounded-xl delius-swash-caps-regular hover:bg-green-600 hover:text-white hover:text-xl"
          >
            Login
          </button>
          <button
            onClick={() => window.open("./register", "_blank")}
            className="w-30 text-lg h-12 flex items-center justify-center gap-2  delius-swash-caps-regular font-bold rounded-xl hover:bg-green-600 hover:text-white hover:text-xl"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
