import { useContext, useEffect } from "react";
import { useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";
import { Link } from "react-router-dom";
import { InstructorContext } from "../../../providers/InstructorContext/InstructorContext";

const TopInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);
  const { allInstructors } = useContext(InstructorContext);

  useEffect(() => {
    const sortedInstructors = allInstructors.sort(
      (a, b) => b.totalStudent - a.totalStudent
    );
    const top6Instructors = sortedInstructors.slice(0, 6);
    setTopInstructors(top6Instructors);
  }, [allInstructors]);

  // console.log(topInstructors);

  return (
    <section className="my-16">
      <div>
        <h1 className="uppercase text-center text-[#703e78] text-2xl font-bold mb-4">
          Star Instructors
        </h1>
        <p className="text-center text-[#ba68c8] font-medium text-lg">
          Unlock Potential with Top Rated Mentors
        </p>
      </div>
      <section className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto">
        {topInstructors.map((topInstructor) => (
          <InstructorCard
            key={topInstructor.id}
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
