import Swal from "sweetalert2";
import useUsers from "../../../../hooks/useUsers";

const ManageUsers = () => {
  const [allUsers, refetchAllUsers] = useUsers();
  // console.log(allUsers);

  const handleMakeAdmin = (user) => {
    // console.log("clicked");
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetchAllUsers();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    // console.log("clicked");
    console.log(user);
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetchAllUsers();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <section className=" w-fit my-12">
        <div className="lg:mx-16">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Users: {allUsers.length}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th></th>
                    <th>Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-[#e1e4e9] font-medium"
                    >
                      <th>{index + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.userPhoto}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="text-lg">{user.userName}</p>
                          <p className="text-sm">{user.userEmail}</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            // disabled={user.isAdmin}
                            disabled={user.userRole !== "normal"}
                            className={`bg-[#ffff00] hover:bg-[#eaf555] p-2 text-blue-700 rounded ${
                              // user.isAdmin
                              user.userRole !== "normal"
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          >
                            Make Admin
                          </button>

                          <button
                            onClick={() => handleMakeInstructor(user)}
                            // disabled={user.isAdmin}
                            disabled={user.userRole !== "normal"}
                            className={`bg-green-500 hover:bg-green-700 ml-4 p-2 text-white rounded ${
                              // user.isAdmin
                              user.userRole !== "normal"
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          >
                            Make Instructor
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageUsers;
