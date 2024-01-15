import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedCourse = () => {
  return (
    <>
      <section className=" w-full ">
        <div className="lg:mx-16">
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
                    <th>Conducted by</th>
                    <th>Price</th>
                    <th>Action</th>
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
                      </div>
                    </td>
                    <td className="">Ema Watson</td>
                    <td className="">${70.0}</td>
                    <td>
                      <div>
                        <Link to={`/dashboard/payment/${7}`}>
                          <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                            Pay
                          </button>
                        </Link>
                        <button className="bg-red-500 hover:bg-red-600 p-2.5 ml-3 text-white rounded">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>2</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                      </div>
                    </td>
                    <td className="">Ema Watson</td>
                    <td className="">${70.0}</td>
                    <td>
                      <div>
                        <Link to={`/dashboard/payment/${7}`}>
                          <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                            Pay
                          </button>
                        </Link>
                        <button className="bg-red-500 hover:bg-red-600 p-2.5 ml-3 text-white rounded">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>3</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                      </div>
                    </td>
                    <td className="">Ema Watson</td>
                    <td className="">${70.0}</td>
                    <td>
                      <div>
                        <Link to={`/dashboard/payment/${7}`}>
                          <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                            Pay
                          </button>
                        </Link>
                        <button className="bg-red-500 hover:bg-red-600 p-2.5 ml-3 text-white rounded">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#e1e4e9] font-medium">
                    <th>4</th>
                    <td>
                      <div>
                        <p className="text-lg">Enlish Learning Class</p>
                        <p className="text-xs">10:30 am - 11:30 am</p>
                        <p className="text-xs">Tuesday, Thursday, Saturday</p>
                      </div>
                    </td>
                    <td className="">Ema Watson</td>
                    <td className="">${70.0}</td>
                    <td>
                      <div>
                        <Link to={`/dashboard/payment/${7}`}>
                          <button className="bg-[#ba68c8] hover:bg-[#703e78] p-2 text-white rounded">
                            Pay
                          </button>
                        </Link>
                        <button className="bg-red-500 hover:bg-red-600 p-2.5 ml-3 text-white rounded">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
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

export default SelectedCourse;
