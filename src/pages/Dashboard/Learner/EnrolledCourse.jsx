import useEnrolled from "../../../hooks/useEnrolled";

const EnrolledCourse = () => {

  const [enrolledCourses] = useEnrolled();
  // console.log(enrolledCourses);

  return (
    <>
      <section className="w-full ">
        <div className="lg:mx-16 my-12">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Course: {enrolledCourses.length}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Conducted by</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    enrolledCourses.map((course, index) => <tr key={course._id} className="hover:bg-[#e1e4e9] font-medium">
                      <th>{index + 1}</th>
                      <td>
                        <div>
                          <p className="text-lg">{course.courseName}</p>
                          <p className="text-xs">{course.courseTime}</p>
                          <p className="text-xs">{course.courseDay}</p>
                        </div>
                      </td>
                      <td className="">{course.instructorName}</td>
                      <td>
                        <div>
                          <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                            Start Now
                          </button>
                        </div>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrolledCourse;
