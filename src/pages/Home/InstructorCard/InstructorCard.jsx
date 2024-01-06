import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorCard = ({ topInstructor }) => {
  //   console.log(topInstructor);
  const { name, imageUrl, language, id } = topInstructor;
  return (
    <div
      className="shadow-lg rounded-lg border-indigo-600 h-28"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex">
        <div>
          <img
            src={imageUrl}
            className="h-24 w-24 my-2 mx-4 rounded-lg"
            alt=""
          />
        </div>
        <div className="my-2 mx-2 w-1/2">
          <h1 className="text-[#703e78] font-bold text-lg mb-1">{name}</h1>
          <p className="text-[#703e78] font-medium">{language}</p>
          <div className="flex justify-end items-center">
            <div
              className="rounded-full bg-[#ba68c8] p-3 hover:tooltip hover:tooltip-open hover:tooltip-bottom"
              data-tip="Details"
            >
              <Link to={`/instructor/:${id}`} className="">
                <FaArrowRight className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
