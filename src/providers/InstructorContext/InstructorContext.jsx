import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch("./instructorData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllInstructors(data);
      });
  }, []);
  return (
    <InstructorContext.Provider value={{ allInstructors }}>
      {children}
    </InstructorContext.Provider>
  );
};
