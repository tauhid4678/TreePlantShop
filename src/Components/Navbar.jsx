import React, { useState } from "react";
import { CircleX, Menu, ChevronDown, LogOut, User } from "lucide-react";
import { GiLindenLeaf } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      setDropOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow-md bg-white relative">
      <div className="flex items-center">
        <div className="bg-green-700 p-1 rounded-[50%] text-xl text-white ">
          <GiLindenLeaf size={24} />
        </div>
        <h1 className="font-semibold ml-2 text-xl md:text-2xl text-green-700 delius-swash-caps-regular">
          <Link to="/">GreenNest</Link>
        </h1>
      </div>

      <ul className="hidden md:flex gap-6 text-lg font-semibold delius-swash-caps-regular ">
        <NavLink className="hover:text-green-600 hover:text-xl" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-green-600 hover:text-xl" to="/plants">
          Plants
        </NavLink>
        <NavLink className="hover:text-green-600 hover:text-xl" to="/profile">
          My Profile
        </NavLink>
      </ul>

      {/* ✅ UPDATED DESKTOP LOGIN/REGISTER (matches your images) */}
      <div className="hidden md:flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="text-lg font-semibold text-[#1f3d2b] hover:opacity-80 delius-swash-caps-regular"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 rounded-xl bg-[#9BC49B] text-[#1f3d2b] font-semibold delius-swash-caps-regular hover:opacity-90 transition"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition"
            >
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/3s7Jm6q/user-placeholder.png"
                }
                alt="user"
                className="w-9 h-9 rounded-full object-cover border"
              />
              <span className="font-semibold text-[#1f3d2b] delius-swash-caps-regular">
                {user?.displayName || "User"}
              </span>
              <ChevronDown size={18} className="text-[#1f3d2b]" />
            </button>

            {dropOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50 delius-swash-caps-regular ">
                <Link
                  to="/profile"
                  onClick={() => setDropOpen(false)}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                >
                  <User size={18} />
                  <span className="font-medium">My Profile</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 text-red-500"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
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

      {/* ✅ mobile dropdown (same format, only auth part updated) */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 text-lg font-medium md:hidden z-50">
          <Link
            className="hover:text-green-600 delius-swash-caps-regular"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-green-600 delius-swash-caps-regular"
            to="/plants"
            onClick={() => setMenuOpen(false)}
          >
            Plants
          </Link>
          <Link
            className="hover:text-green-600 delius-swash-caps-regular"
            to="/profile"
            onClick={() => setMenuOpen(false)}
          >
            My Profile
          </Link>

          {!user ? (
            <div className="flex items-center  gap-4">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold  text-[#1f3d2b] delius-swash-caps-regular"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2 rounded-xl bg-[#9BC49B] text-[#1f3d2b] font-semibold delius-swash-caps-regular"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/3s7Jm6q/user-placeholder.png"
                  }
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <p className="font-semibold text-[#1f3d2b] delius-swash-caps-regular">
                  {user?.displayName || "User"}
                </p>
              </div>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-500 font-semibold delius-swash-caps-regular"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
