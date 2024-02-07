import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import InstructorCard from "../InstructorCard/InstructorCard";
import { Link } from "react-router-dom";

const TopInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);
  const [allUsers, isLoadingAllUsers] = useUsers();

  const allInstructors = allUsers.filter(
    (user) => user.userRole === "insturctor"
  );

  useEffect(() => {
    const sortedInstructors = allInstructors.sort(
      (a, b) => b.totalStudent - a.totalStudent
    );
    const top6Instructors = sortedInstructors.slice(0, 6);
    setTopInstructors(top6Instructors);
  }, [allUsers]);

  console.log(topInstructors);

  if (allUsers.length == 0 && isLoadingAllUsers) {
    return (
      <div className="flex justify-center items-center mt-16">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="my-24 py-8 bg-[#fafafa]">
      <div>
        <h1 className="uppercase text-center text-[#703e78] text-2xl font-bold mb-4">
          Star Instructors
        </h1>
        <p className="text-center text-[#ba68c8] font-medium text-sm lg:text-lg">
          Unlock Potential with Top Rated Mentors
        </p>
      </div>
      <section className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-9/12 mx-auto">
        {topInstructors.map((topInstructor) => (
          <InstructorCard
            key={topInstructor._id}
            topInstructor={topInstructor}
          />
        ))}
      </section>
      <div className="flex justify-center items-center">
        <div
          className="border border-[#703e78] px-6 py-3 rounded hover:bg-base-200"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Link
            to="/instructors"
            className="text-lg font-bold text-[#703e78] flex items-center"
          >
            All Instructors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
