import useUsers from "../../../hooks/useUsers";

const Instructors = () => {
  const [allUsers, isLoadingAllUsers] = useUsers();
  // console.log(allUsers);
  
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

  const allInstructors = allUsers.filter(
    (user) => user.userRole === "insturctor"
  );
  // console.log(allInstructors);

  return (
    <>
      <section className="mx-4 lg:mx-16 ">
        <div className="my-16 text-[#703e78] text-center">
          <h1 className="text-xl lg:text-3xl font-bold ">Meet Our Multilingual Experts</h1>
          <h2 className="font-semibold mt-4 text-xs lg:text-sm">Embark on a Linguistic Journey with Our Seasoned Instructors</h2>
        </div>
        <div className="my-24 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {allInstructors.map((instructor) => (
              <div
                key={instructor._id}
                className="border rounded"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="m-3">
                  <div className="flex justify-center">
                    <img
                      src={instructor.userPhoto}
                      className="w-32 h-32 rounded"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 text-center text-[#703e78]">
                    <p className="font-bold">{instructor.userName}</p>
                    <p className="font-semibold">{instructor.userEmail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
