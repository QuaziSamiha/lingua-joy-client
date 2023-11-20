import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  const routes = [
    {
      id: "",
      name: "Home",
    },
    { id: "instructors", name: "Instructors" },
    {
      id: "classes",
      name: "Classes",
    },
    {
      id: "signin",
      name: "Sign in",
    },
  ];
  return (
    <>
      <section>
        <nav className="flex justify-between">
          <div className="h-48 w-80 border">
            {/* <img src={logo} alt="" /> */}
          </div>
          <div>
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link to={route.id}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
