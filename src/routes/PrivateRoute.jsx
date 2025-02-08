import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log("location: ", location);

  if (loading) {
    return (
      <>
        <span className="loading loading-spinner text-secondary"></span>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;