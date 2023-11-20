import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import Instructors from "../Instructors/Instructors/Instructors";
import Classes from "../Classes/Classes/Classes";
import SignIn from "../Shared/SignIn/SignIn";
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
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
