const MyCourses = () => {
  return (
    <>
      <section className="w-full">
        <div className="mx-16">
          <div className="bg-[#ba68c8] py-4 rounded-t-lg font-bold leading-3 text-white">
            <h1 className="text-2xl pl-4">Total Course: {7}</h1>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table text-[#703e78]">
                {/* head */}
                <thead className="text-[#703e78]">
                  <tr>
                    <th>#</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th>Enrolled Student</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>1</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                        <p className="text-xs">Available Seat: 30</p>
                      </div>
                    </td>
                    <td className="text-green-500">Approved</td>
                    <td className="">5</td>
                    <td></td>
                  </tr>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>2</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                        <p className="text-xs">Available Seat: 30</p>
                      </div>
                    </td>
                    <td className="text-red-500">Denied</td>
                    <td className="">0</td>
                    <td>
                      <p>Lack of Information</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>3</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                        <p className="text-xs">Available Seat: 30</p>
                      </div>
                    </td>
                    <td className="text-orange-500">Pending</td>
                    <td className="">0</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCourses;
