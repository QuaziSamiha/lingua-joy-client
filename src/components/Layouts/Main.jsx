import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <section>
        <Navbar />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Main;
