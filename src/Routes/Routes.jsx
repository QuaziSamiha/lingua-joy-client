import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Courses from "../pages/Courses/Courses/Courses";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import CourseDetail from "../pages/Courses/CourseDetail/CourseDetail";
import Dashboard from "../Layouts/Dashboard";
import PaymentHistory from "../pages/Dashboard/Learner/PaymentHistory";
import SelectedCourse from "../pages/Dashboard/Learner/SelectedCourse";
import MakePayment from "../pages/Dashboard/Learner/MakePayment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "course/:id",
        // TODO: WILL BE PRIVATE ROUTE
        element: <CourseDetail />,
        // load from backend
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "selectedcourses",
        element: <SelectedCourse />,
      },
      {
        path: "payment/:id",
        element: <MakePayment />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
