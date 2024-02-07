import { useContext } from "react";
import useCourse from "../../../hooks/useCourse";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyCourses = () => {
  const [courses, isLoading] = useCourse();
  // console.log(courses);
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  if (courses.length == 0 && isLoading) {
    return (
      <div className="flex justify-center items-center mt-16">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const instructorCourses = courses.filter(
    (course) => course.instructorEmail == user.email
  );
  console.log(instructorCourses);

  return (
    <>
      <section className="w-full">
        <div className="mx-16">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Course: {7}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th>Enrolled Student</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {instructorCourses.map((course, index) => (
                    // <div key={course._id}>
                    // {" "}
                    <tr
                      key={course._id}
                      className="hover:bg-[#e1e4e9] font-medium"
                    >
                      <th>{index + 1}</th>
                      <td>
                        <div>
                          <p className="text-lg">{course.courseName}</p>
                          <p className="text-xs">{course.courseTime}</p>
                          <p className="text-xs">{course.courseDay}</p>
                          <p className="text-xs">Price: ${course.price}</p>
                          <p className="text-xs">
                            Available Seat:{" "}
                            {course.availableSeat - course.totalStudent}
                          </p>
                        </div>
                      </td>
                      <td
                        className={`capitalize ${
                          course.courseStatus === "Pending"
                            ? "text-orange-600"
                            : course.courseStatus === "denied"
                            ? "text-red-600"
                            : course.courseStatus === 'approved'
                            ? "text-green-600"
                            : ""
                        }`}
                      >
                        {course.courseStatus}
                      </td>
                      <td className="">{course.totalStudent}</td>
                      <td></td>
                    </tr>
                    // </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCourses;
