import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <>
      <section className="">
        <NavigationBar />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Main;
