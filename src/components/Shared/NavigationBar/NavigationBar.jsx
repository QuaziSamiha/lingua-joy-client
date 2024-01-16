import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const routes = [
    {
      id: "",
      name: "Home",
    },
    // {
    //   id: "/aboutus",
    //   name: "About Us",
    // },
    { id: "/instructors", name: "Instructors" },
    {
      id: "/courses",
      name: "Courses",
    },
    {
      id: "/dashboard",
      name: "Dashboard",
    },
  ];

  return (
    <>
      <div className="navbar bg-[#ba68c8] px-8 font-Outfit">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {isOpen ? (
                <FaBars onClick={() => setIsOpen(false)} />
              ) : (
                <RxCross2 onClick={() => setIsOpen(true)} />
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routes.map((route, index) => (
                <li key={index} className="px-4 uppercase">
                  <Link to={route.id}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="btn btn-ghost text-2xl uppercase font-bold text-white">
            LinguaJoy
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((route, index) => (
              <li key={index} className="px-1 text-white font-medium">
                <Link
                  className="hover:shadow-lg shadow-[#703e78] uppercase"
                  to={route.id}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="rounded-full">
            <img src="" alt="" />
          </div>
          <Link
            to="/signup"
            className="btn bg-[#dcb3e4] skeleton text-lg font-bold text-[#703e78] border-none rounded w-32"
          >
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
