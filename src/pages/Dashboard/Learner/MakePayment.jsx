import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useEnrolled from "../../../hooks/useEnrolled";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useCourse from "../../../hooks/useCourse";

const MakePayment = () => {
  const course = useLoaderData();
  // console.log(course)
  const [courses, refetch] = useCourse();
  // console.log(courses)
  const paidCourse = courses.filter(
    (findCourse) => findCourse._id === course.courseId
  );
  console.log(paidCourse[0]);
  const { user } = useContext(AuthContext);
  const [refetchEnrolledCourse] = useEnrolled();
  const [refetchCart] = useCart();

  const handlePayment = (course) => {
    console.log(course);
    if (user && user.email) {
      const addingCourse = { ...course };
      // console.log(addingCourse)
      fetch(`http://localhost:5000/enrolledCourses`, {
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
            refetchEnrolledCourse;
            fetch(`http://localhost:5000/carts/${course._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetchCart;
                  fetch(
                    `http://localhost:5000/courses/updated/${paidCourse[0]._id}`,
                    {
                      method: "PATCH",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      if (data.modifiedCount) {
                        refetch();
                        console.log(paidCourse[0].courseName, "updated");
                      }
                    });
                }
              });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Enrolled Successfully",
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
      <section className=" w-full ">
        <div className="lg:mx-16">
          <h1 className="uppercase py-4 text-center text-3xl text-[#703e78] font-bold leading-3">
            payment
          </h1>
          <div className="mt-8">
            <div className="flex justify-evenly">
              <div className="w-1/2 mx-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-1/2 mx-4">
                <input
                  type="text"
                  placeholder="MM/YY/CVC"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handlePayment(course)}
                className="text-white bg-[#ba68c8] hover:bg-[#703e78] my-4 px-10 py-3 rounded text-lg font-semibold"
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakePayment;
