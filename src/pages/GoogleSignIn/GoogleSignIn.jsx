import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = ({method}) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      <div className="m-6">
        <button onClick={handleGoogleSignIn} className="btn btn-block bg-base-300 rounded-none text-lg font-semibold">
          Sing {method} with Google
          <FcGoogle className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default GoogleSignIn;
