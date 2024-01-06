import { useContext, useState } from "react";
import { InstructorContext } from "../../../providers/InstructorContext/InstructorContext";
import BriefInfo from "../BriefInfo/BriefInfo";
import Pagination from "../../../components/Pagination/Pagination";

const Instructors = () => {
  const { allInstructors } = useContext(InstructorContext);
  // console.log(allInstructors);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the range of instructors to display for the current page
  const indexOfLastInstructor = currentPage * itemsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - itemsPerPage;
  const currentInstructors = allInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Teaching Language</th>
              <th>Total Students</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {allInstructors.map((instructor) => (
              <BriefInfo key={instructor.id} instructor={instructor} />
            ))} */}
            {allInstructors
              .slice(indexOfFirstInstructor, indexOfLastInstructor)
              .map((instructor) => (
                <BriefInfo key={instructor.id} instructor={instructor} />
              ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <div className="text-center py-8 w-full">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(allInstructors.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </div>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Instructors;
