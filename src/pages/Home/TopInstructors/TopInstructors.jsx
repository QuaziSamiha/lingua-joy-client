import { useEffect } from "react";
import { useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const TopInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch(`./instructorData.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const sortedInstructors = data.sort(
          (a, b) => b.totalStudent - a.totalStudent
        );
        const top6Instructors = sortedInstructors.slice(0, 6);
        setTopInstructors(top6Instructors);
      });
  }, []);

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
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto">
        {topInstructors.map((topInstructor) => (
          <InstructorCard
            key={topInstructor.id}
            topInstructor={topInstructor}
          />
        ))}
      </section>
    </section>
  );
};

export default TopInstructors;
