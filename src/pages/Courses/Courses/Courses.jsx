/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Banner from "../../../components/Shared/Banner/Banner";
import SearchBar from "../../../components/Shared/SearchBar/SearchBar";
import useCourse from "../../../hooks/useCourse";
import CourseCard from "../CourseCard/CourseCard";

function Courses() {
  const [approvedCourses, setApprovedCourses] = useState([]);
  const [courses, refetch, isPending, isLoading, isError] = useCourse();
  // console.log(courses);
  // console.log(isLoading);

  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) => course.courseStatus === "approved"
    );
    // refetch();
    setApprovedCourses(filteredCourses);
  }, [courses]);

  if (isLoading) {
    return <span className="loading loading-spinner text-[#ba68c8]"></span>;
  }

  // console.log(approvedCourses);

  return (
    <>
      <Banner />
      <section className="w-[1180px] mx-auto my-16">
        <div className="flex justify-center my-8">
          <SearchBar />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24">
          {approvedCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </section>
        <div>{/* TODO: PAGINATION */}</div>
      </section>
    </>
  );
}

export default Courses;
