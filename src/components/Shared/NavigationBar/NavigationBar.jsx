import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
// import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const routes = [
    {
      id: "",
      name: "Home",
    },
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
      <div className="navbar bg-[#ba68c8] lg:px-8 font-Outfit">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-white md:hidden">
              {isOpen ? (
                <RxCross2 onClick={() => setIsOpen(false)} />
              ) : (
                <FaBars onClick={() => setIsOpen(true)} />
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-6 z-[1] bg-[#ba68c8] p-2 shadow w-[450px] ${
                isOpen === true ? "" : "hidden"
              }`}
            >
              {routes.map((route, index) => (
                <li key={index} className="lg:px-4 uppercase text-white">
                  <Link to={route.id}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="pl-4 text-lg lg:text-2xl uppercase font-semibold lg:font-bold text-white">
            LinguaJoy
          </p>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((route, index) => (
              <li key={index} className="lg:px-1 text-white font-medium">
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
          <div>
            {user ? (
              <img
                src={user.photoURL}
                alt=""
                className="rounded-full w-8 lg:w-12 h-8 lg:h-12 mr-3"
              />
            ) : (
              <> </>
            )}
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="p-2 lg:p-0 lg:btn bg-[#dcb3e4] text-sm lg:text-lg font-bold text-[#703e78] border-none rounded lg:w-32"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/signup"
              className="p-2 lg:p-0 lg:btn bg-[#dcb3e4] skeleton text-sm lg:text-lg font-bold text-[#703e78] border-none rounded lg:w-32"
            >
              Join Us
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
