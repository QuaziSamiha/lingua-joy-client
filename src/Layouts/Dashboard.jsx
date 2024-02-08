import { FaHome } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdFormatListBulletedAdd, MdAddchart } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
// import Footer from '../components/Shared/Footer/Footer'

const Dashboard = () => {
  const [allUsers, isLoadingAllUsers] = useUsers();
  // console.log(allUsers);
  const { user } = useContext(AuthContext);
  // console.log(user);

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

  const userInfo = allUsers.filter(
    (currentUser) => currentUser.userEmail === user.email
  );
  // console.log(userInfo);

  const [currentUserInfo] = userInfo;
  // console.log(currentUserInfo);
  // console.log(currentUserInfo.userRole)
  // console.log(userInfo[0]);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          {/* <Footer /> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-[#703e78] drawer-button lg:hidden"
          >
            Click
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#ba68c8] text-[#fafafa] uppercase">
            {/* Sidebar content here */}
            <h1 className="btn btn-ghost text-2xl uppercase font-bold text-white mb-4">
              LinguaJoy
            </h1>

            {currentUserInfo.userRole === "admin" ? (
              <>
                <li>
                  <Link to="/dashboard/admin/home">
                    <FaHome className="w-4 h-4" />
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageCourses">
                    <IoSettings className="w-4 h-4" />
                    Manage Courses
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">
                    <FaUsersCog className="w-4 h-4" />
                    Manage Users
                  </Link>
                </li>
              </>
            ) : currentUserInfo.userRole === "insturctor" ? (
              <>
                <li>
                  <Link to="/dashboard/home">
                    <FaHome className="w-4 h-4" /> Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addcourse">
                    <MdAddchart className="w-4 h-4" />
                    Add Course
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mycourses">
                    <FaClipboardList className="w-4 h-4" />
                    My courses
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/home">
                    {" "}
                    <FaHome className="w-4 h-4" />
                    Learner Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/selectedcourses">
                    <FaListCheck className="w-4 h-4" />
                    Selected Courses
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledcourses">
                    <MdFormatListBulletedAdd className="w-4 h-4" />
                    Enrolled Courses
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory">
                    {" "}
                    <FaFileInvoiceDollar className="w-4 h-4" />
                    payment history
                  </Link>
                </li>
              </>
            )}

            {/* -----------------------for an admin---------------------------- */}

            {/* for a instructor */}

            {/* -------------for a student------------------ */}

            <div className="divider divider-neutral"></div>
            <li>
              <Link to="/">
                <FaHome className="w-4 h-4" />
                home
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <LiaChalkboardTeacherSolid className="w-4 h-4" />
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <SiBookstack className="w-4 h-4" />
                courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
