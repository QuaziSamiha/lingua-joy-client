import { useEffect, useState } from "react";
import useCourse from "../../../hooks/useCourse";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const TopCourses = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [courses] = useCourse();
  //   console.log(courses);

  useEffect(() => {
    const sortedCourses = courses.sort(
      (a, b) => b.totalStudent - a.totalStudent
    );
    const top6Courses = sortedCourses.slice(0, 6);
    setTopCourses(top6Courses);
  }, [courses]); // Add courses as a dependency

  //   console.log(topCourses);
  return (
    <>
      <section className="my-24 py-8 bg-[#fafafa]">
        <div>
          <h1 className="uppercase text-center text-[#703e78] text-lg lg:text-2xl font-bold mb-4">
            Prime Picks
          </h1>
          <p className="text-center text-[#ba68c8] font-medium text-xs lg:text-lg">
            Explore Excellence | Learn and Lead | Featured Courses
          </p>
        </div>
        <section className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 xl:w-9/12 xl:mx-auto">
          {topCourses.map((topCourse) => (
            <CourseCard key={topCourse.courseId} topCourse={topCourse} />
          ))}
        </section>
        <div className="flex justify-center items-center">
          <div
            className="border border-[#703e78] px-6 py-3 rounded hover:bg-base-200"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Link
              to="/courses"
              className="text-lg font-bold text-[#703e78] flex items-center"
            >
              All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCourses;
