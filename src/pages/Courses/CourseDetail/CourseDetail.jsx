import Banner from "../../../components/Shared/Banner/Banner";
import CourseOutline from "./CourseOutline";
import { FaHeartCircleCheck } from "react-icons/fa6";
import CoursePrerequisite from "./CoursePrerequisite";
import CourseReward from "./CourseReward";
import QuestionAnswer from "./QuestionAnswer";
import Swal from "sweetalert2";
// -------------------------------------------IMPORTANT IMPORTS-------------------------------------
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart";

const CourseDetail = () => {
  const course = useLoaderData();
  // console.log(course);
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [refetchCart] = useCart();
  const {
    _id,
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

  const handleAddToFavourite = () => {
    // console.log(course);
    if (user && user.email) {
      const addingCourse = {
        courseId: _id,
        courseName,
        courseImage,
        instructorName,
        totalStudent,
        availableSeat,
        courseTime,
        courseDay,
        price,
        userEmail: user.email,
      };
      // console.log(addingCourse);
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addingCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetchCart;
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course Added to List",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Banner />
      <section className="lg:w-[1180px] lg:mx-auto my-16">
        <div className="md:flex justify-evenly lg:gap-28">
          <div className="ml-8 lg:w-2/3">
            <div className=" text-[#703e78]">
              <div className="ml-4 lg:ml-0 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
                <p className=" lg:text-3xl leading-2 font-bold mb-1">
                  {courseName}
                </p>
                <div className="w-fit mb-3 lg:mb-0 flex justify-evenly items-center bg-[#ba68c8] text-white hover:bg-[#703e78] ">
                  <button
                    onClick={handleAddToFavourite}
                    className="lg:w-full lg:text-lg py-2 rounded mx-1 outline-none"
                  >
                    Add to Favourite
                  </button>
                  <FaHeartCircleCheck className="w-6 h-6 pr-1" />
                </div>
              </div>
              <div className="ml-4 lg:ml-0 lg:text-lg">
                <p className="mb-1">
                  <span className="font-bold"> Instructor:</span>{" "}
                  <span className="font-semibold">{instructorName}</span>
                </p>
                <p className="mb-1">
                  <span className="font-bold">Course Duration:</span>{" "}
                  <span className="font-semibold"> 3 weeks </span>
                </p>
                <p className="mb-1">
                  <span className="font-bold">Time:</span>{" "}
                  <span className="font-semibold">{courseTime}</span>
                </p>
                <p className="mb-1">
                  <span className="font-bold"> Schedule:</span>{" "}
                  <span className="font-semibold">{courseDay}</span>{" "}
                </p>
                <p className="mb-1">
                  <span className="font-bold">Available Seats:</span>{" "}
                  <span className="font-semibold">{availableSeat}</span>
                </p>
                <p className="mb-1">
                  <span className="font-bold">Enrolled Students:</span>{" "}
                  <span className="font-semibold">{totalStudent}</span>
                </p>
                <p className="mb-1">
                  <span className="font-bold">Price:</span>{" "}
                  <span className="font-semibold"> $ {price}</span>
                </p>
              </div>
            </div>
            <div>
              <CoursePrerequisite />
              <CourseReward />
              <QuestionAnswer />
            </div>
          </div>
          <div className="mx-3 lg:mx-0 lg:w-1/3  bg-[#ba68c8]">
            <div className="my-4">
              <div className="flex justify-center py-3 mx-2 lg:mx-6">
                <img
                  src={courseImage}
                  alt=""
                  className="rounded-md"
                  data-aos="fade-up-right"
                  data-aos-duration="2000"
                />
              </div>
              <div className="text-white my-6 ml-1 mr-1 lg:ml-6">
                <CourseOutline courseName={courseName} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
