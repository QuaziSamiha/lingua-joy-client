import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [allInstructor, setAllInstructor] = useState([]);

  useEffect(() => {
    fetch("./instructorData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllInstructor(data);
      });
  }, []);
  return (
    <InstructorContext.Provider value={{ allInstructor }}>
      {children}
    </InstructorContext.Provider>
  );
};
