import { useEffect } from "react";
import { useState } from "react";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch(`./instructorData.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data)
      });
  }, []);

  return (
    <section className="my-16">
      <h1 className="uppercase text-center text-[#703e78] text-2xl font-bold mb-4">
        Star Instructors
      </h1>
      <p className="text-center text-[#ba68c8] font-medium text-lg">
        Unlock Potential with Top Rated Mentors
      </p>
    </section>
  );
};

export default TopInstructors;
