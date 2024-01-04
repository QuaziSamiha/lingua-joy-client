import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Main;
