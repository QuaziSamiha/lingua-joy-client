import { Link } from "react-router-dom";
import useCourse from "../../../../hooks/useCourse";
import photo from "../../../../assets/images/instructor/ins1.jpg";
import { GiCancel } from "react-icons/gi";
import { FcAcceptDatabase } from "react-icons/fc";
import { useState } from "react";

const ManageCourses = () => {
  // eslint-disable-next-line no-unused-vars
  const [courses, refetch, isLoading] = useCourse();
  // console.log(courses);
  const [isApproved, setIsApproved] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-dots loading-xs text-primary"></span>
        <span className="loading loading-dots loading-sm text-primary"></span>
        <span className="loading loading-dots loading-md text-primary"></span>
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }
  return (
    <>
      <section className="w-full my-12">
        <div className="lg:mx-8">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Course: {courses.length}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th>Instructor Details</th>
                    <th>Course Details</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    // console.log(course)
                    <tr
                      key={course._id}
                      className="hover:bg-[#e1e4e9] font-medium"
                    >
                      <th>{index + 1}</th>

                      <td className="w-2/6">
                        <div className="flex justify-start">
                          <div className="avatar">
                            <div className="w-24 rounded-xl">
                              <img src={course.instructorPhoto || photo} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium">
                              {course.instructorName}
                            </p>
                            <p>{course.instructorEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="w-2/6">
                        <div>
                          <p className="text-lg font-medium">
                            {course.courseName}
                          </p>
                          <p className="text-xs mt-1">
                            <span className="font-bold mr-1">Time:</span>{" "}
                            {course.courseTime}
                          </p>
                          <p className="text-xs mt-1">
                            <span className="font-bold mr-1">Day:</span>{" "}
                            {course.courseDay}
                          </p>
                          <p className="text-xs mt-1">
                            <span className="font-bold mr-1">Price:</span> $
                            {course.price || 50.0}
                          </p>
                          <p className="text-xs mt-1">
                            <span className="font-bold mr-1">
                              Available Seat:
                            </span>{" "}
                            {course.availableSeat}
                          </p>
                          <p className="text-xs mt-1">
                            <span className="font-bold mr-1">
                              {" "}
                              Total Student:
                            </span>
                            {course.totalStudent}
                          </p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="font-bold capitalize w-1/6">
                          {course.courseStatus}
                        </div>
                      </td>
                      <td>
                        <div className="w-1/6">
                          <div className="flex">
                            <div className="tooltip" data-tip="Approve">
                              <Link to={`/dashboard/payment/${course._id}`}>
                                <button
                                  onClick={() => setIsApproved(true)}
                                  className="bg-[#ba68c8] hover:bg-[#703e78] text-white rounded"
                                >
                                  <FcAcceptDatabase className="h-8 w-8" />
                                </button>
                              </Link>
                            </div>
                            <div></div>
                            <div className="tooltip" data-tip="Deny">
                              <button
                                onClick={() => setIsDenied(true)}
                                className="bg-red-500 hover:bg-red-600 p-2 ml-3 text-white rounded"
                              >
                                <GiCancel className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
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

export default ManageCourses;
