import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  const routes = [
    {
      id: "",
      name: "Home",
    },
    {
      id: "aboutus",
      name: "About Us",
    },
    { id: "instructors", name: "Instructors" },
    {
      id: "courses",
      name: "Courses",
    },
    {
      id: "dashboard",
      name: "Dashboard",
    },
  ];
  return (
    <>
      <section>
        <nav className="h-14 flex justify-between text-white bg-black bg-opacity-30">
          <div className="mt-2 mx-6">
            <h1 className="uppercase text-3xl font-bold">Lingua Joy</h1>
            {/* <p className="text-sm">Learning Power</p> */}
          </div>
          <div>
            <ul className="flex mt-3">
              {routes.map((route, index) => (
                <li key={index} className="px-4">
                  <Link to={route.id}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-1 mx-6">
            <Link to="signin">
              <button className="mt-1 bg-black px-6 py-1.5 rounded">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
