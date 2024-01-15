import { Link, useRouteError } from "react-router-dom";
import image from "../../assets/images/others/404 error with people holding the numbers-amico.png";
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div className="flex justify-center items-center">
        <div id="error-page">
          <img src={image} className="h-96 w-96" alt="" />
          <div className="text-center my-2 text-[#703e78] ">
            <h1 className="font-medium">Oops!</h1>
            <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg font-bold">
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <div className="my-8 flex justify-center">
            <Link to="/" className="">
              <button className="bg-[#ba68c8] font-semibold flex items-center text-white px-6 py-2 rounded">
                Back <FaHome className="mx-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
