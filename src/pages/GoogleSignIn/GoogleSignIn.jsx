import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleSignIn = ({ method }) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  console.log("from: ", from);
  console.log("location: ", location);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const newUser = {
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
        };
        // console.log(newUser);
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("inserted successfully samiha");
            console.log(data);
            setMsg(data.message);

            Swal.fire({
              title: "Welcome to LinguaJoy!",
              width: 600,
              padding: "3em",
              color: "#703e78",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `,
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
              },
              timer: 1000,
              showConfirmButton: false,
            });
            // navigate("/");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      <div className="m-6">
        {msg ? <span className="text-xs text-red">{msg}</span> : <></>}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-block bg-base-300 rounded-none text-lg font-semibold"
        >
          Sing {method} with Google
          <FcGoogle className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default GoogleSignIn;
