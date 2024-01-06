import { useContext } from "react";
import { InstructorContext } from "../../../providers/InstructorContext/InstructorContext";

const Instructors = () => {
  const { allInstructor } = useContext(InstructorContext);
  console.log(allInstructor);
  return <section></section>;
};

export default Instructors;
