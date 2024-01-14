/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import img from "../../../assets/images/courseImages/10.jpg";

const CourseCard = ({ course }) => {
  //   console.log(course);
  const { courseId, image, className, instructorName, totalStudent, totalSeat, price } =
    course;
  //   console.log(image);
  const availableSeat = totalSeat - totalStudent;
  //   console.log(availableSeat)

//   const handleCourseDetail = () => {}

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="bg-[#fafafa] rounded-lg shadow-lg">
        <div className="flex justify-center ">
          <img src={img} alt="" className="w-full m-6 rounded-md h-48" />
        </div>
        <div className="mx-6 text-[#703e78]">
          <p className=" text-xl mb-1 font-bold leading-relaxed">{className}</p>
          <p className="mb-1">
            Conducted by{" "}
            <span className="text-lg font-semibold">{instructorName}</span>
          </p>
          <div className="flex justify-between">
            <p>Available Seat: {availableSeat}</p>
            <p>Fee: ${price}</p>
          </div>
        </div>
        <div className="mx-6 text-white text-center">
          <Link to={`/course/${courseId}`}>
            <button className="w-full bg-[#ba68c8] my-4 py-2 rounded-md hover:bg-[#703e78]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
