import img from "../../../assets/images/courseImages/10.jpg";
import Banner from "../../../components/Shared/Banner/Banner";
import CourseOutline from "./CourseOutline";
import { FaHeartCircleCheck } from "react-icons/fa6";
import CoursePrerequisite from "./CoursePrerequisite";
import CourseReward from "./CourseReward";
import QuestionAnswer from "./QuestionAnswer";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  console.log(course);
  const {
    courseName,
    courseImage,
    instructorName,
    // instructorEmail,
    price,
    // courseStatus,
    totalStudent,
    availableSeat,
    courseTime,
    courseDay,
  } = course;
  return (
    <>
      <Banner />
      <section className="w-[1180px] mx-auto my-16">
        <div className="md:flex justify-evenly gap-28">
          <div className="w-2/3">
            <div className=" text-[#703e78]">
              <div className="flex justify-between items-center">
                <p className=" text-3xl leading-2 font-bold mb-1">
                  {courseName}
                </p>
                <div className="flex justify-evenly items-center bg-[#ba68c8] text-white hover:bg-[#703e78] ">
                  <button className="w-full text-lg py-2 rounded mx-1 ">
                    Add to Favourite
                  </button>
                  <FaHeartCircleCheck className="w-6 h-6 pr-1" />
                </div>
              </div>
              <p className="text-lg mb-1">
                <span className="font-bold"> Instructor Name:</span>{" "}
                <span className="font-semibold">{instructorName}</span>
              </p>
              <p className="text-lg mb-1">
                <span className="font-bold">Course Duration:</span>{" "}
                <span className="font-semibold"> 3 weeks </span>
              </p>
              <p className="text-lg mb-1">
                <span className="font-bold">Time:</span>{" "}
                <span className="font-semibold">{courseTime}</span>
              </p>
              <p className="text-lg mb-1">
                <span className="font-bold"> Schedule:</span>{" "}
                <span className="font-semibold">{courseDay}</span>{" "}
              </p>
              <p className="text-lg mb-1">
                <span className="font-bold">Available Seats:</span>{" "}
                <span className="font-semibold">
                  {availableSeat - totalStudent}
                </span>
              </p>
              <p className="text-lg mb-1">
                <span className="font-bold">Price:</span>{" "}
                <span className="font-semibold">{price}</span>
              </p>
            </div>
            <div>
              <CoursePrerequisite />
              <CourseReward />
              <QuestionAnswer />
            </div>
          </div>
          <div className="w-1/3  bg-[#ba68c8]">
            <div className="my-4">
              <div className="flex justify-center mx-6">
                <img
                  src={courseImage}
                  alt=""
                  className="rounded-md"
                  data-aos="fade-up-right"
                  data-aos-duration="3000"
                />
              </div>
              <div className="text-white my-6 ml-6">
                <CourseOutline courseName={"English"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
