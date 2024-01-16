import { Link } from "react-router-dom";
// import img from "../../../assets/images/courseImages/2.jpg";
import { FaArrowRight } from "react-icons/fa";

const CourseCard = ({ topCourse }) => {
  const {
    courseId,
    image,
    className,
    instructorName,
    // totalStudent,
    // totalSeat,
    // price,
  } = topCourse;
  //   console.log(image);
  // const availableSeat = totalSeat - totalStudent;

  return (
    <>
      <div
        className="shadow-lg rounded-lg border-indigo-600 h-28"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex">
          <div>
            <img src={image} className="h-24 w-24 my-2 mx-4 rounded-lg" alt="" />
          </div>
          <div className="m-2 w-2/3 h-24">
            <h1 className="text-[#703e78] font-semibold text-md mb-1">
              {className}
            </h1>
            <p className="text-[#703e78] font-medium text-sm">
              By {instructorName}
            </p>
            <div className="flex justify-end items-end">
              <div
                className="rounded-full bg-[#ba68c8] p-2 hover:tooltip hover:tooltip-open hover:tooltip-bottom"
                data-tip="Details"
              >
                <Link to={`/course/${courseId}`} className="">
                  <FaArrowRight className="text-white h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
