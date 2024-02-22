import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const SelectedCourse = () => {
  const [cart, refetchCart] = useCart();
  // console.log(cart);

  const handleDelete = (course) => {
    // console.log(course);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${course._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetchCart
              Swal.fire("Removed!", "Your file has been removed", "success");
            }
          });
      }
    });
  }
  return (
    <>
      <section className=" w-full my-12">
        <div className="lg:mx-16">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Course: {cart.length}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Conducted by</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((course, index) =>
                      // console.log(course)
                      <tr key={course._id} className="hover:bg-[#e1e4e9] font-medium">
                        <th>{index + 1}</th>
                        <td>
                          <div>
                            <p className="text-lg">{course.courseName}</p>
                            <p className="text-xs">{course.courseTime}</p>
                            <p className="text-xs">{course.courseDay}</p>
                          </div>
                        </td>
                        <td className="">{course.instructorName}</td>
                        <td className="">${course.price || 50.00}</td>
                        <td>
                          <div>
                            <Link to={`/dashboard/payment/${course._id}`}>
                              <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                                Pay
                              </button>
                            </Link>
                            <button onClick={() => handleDelete(course)} className="bg-red-500 hover:bg-red-600 p-2.5 ml-3 text-white rounded">
                              <FaTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectedCourse;
