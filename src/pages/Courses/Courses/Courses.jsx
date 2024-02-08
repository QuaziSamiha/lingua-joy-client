import Banner from "../../../components/Shared/Banner/Banner";
import SearchBar from "../../../components/Shared/SearchBar/SearchBar";
import useCourse from "../../../hooks/useCourse";
import CourseCard from "../CourseCard/CourseCard";

function Courses() {
  const [courses, isLoading] = useCourse();
  // console.log(courses);
  // console.log(isLoading);

  const approvedCourses = courses.filter(
    (course) => course.courseStatus === "approved"
  );

  if (courses.length == 0 && isLoading) {
    return (
      <div className="flex justify-center mt-24">
        <span className="loading loading-spinner text-[#ba68c8]"></span>
      </div>
    );
  }

  // console.log(approvedCourses);

  return (
    <>
      <Banner />
      <section className="md:w-[1180px] mx-2 md:mx-auto my-16">

        {/* TODO: Future Feature */}
        <div className="flex justify-center my-8">
          <SearchBar />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 mx-4">
          {approvedCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </section>

        <div>{/* TODO: PAGINATION --- Future Feature */}</div>
      </section>
    </>
  );
}

export default Courses;
