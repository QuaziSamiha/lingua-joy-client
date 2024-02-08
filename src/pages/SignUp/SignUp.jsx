import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/others/sign-up.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("from", from);
  console.log("location: ", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        console.log("signed up success");
        return updateUserProfile(data.name, data.photoURL);
      })
      .then(() => {
        console.log("user info updated");
        console.log("user profile update successfully");
        const newUser = {
          userName: data.name,
          userEmail: data.email,
          userPhoto: data.photoURL,
          // isAdmin: false,
          userRole: "normal",
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
          });
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
      })
      .catch((createUserError) => {
        // Handle createUser error
        const errorCode = createUserError.code;
        const errorMessage = createUserError.message;
        console.log(createUserError, errorCode);
        setError(errorMessage);
      })
      .catch((updateProfileError) => {
        // Handle updateUserProfile error
        const updateErrorCode = updateProfileError.code;
        // const updateErrorMessage = updateProfileError.message;
        console.log(updateProfileError, updateErrorCode);
        // Handle the error or set state accordingly
      });
  };

  return (
    <>
      <section className="mt-16 mb-24">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around lg:items-center">
          <div className="lg:w-[500px] lg:h-[600px]">
            <h1 className="text-center font-bold text-3xl uppercase text-[#37474f]">
              Sign up
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-6">
              {error ? (
                <>
                  <p className="text-red-500 text-xs text-center">
                    This email is already used
                  </p>
                </>
              ) : (
                <></>
              )}
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-medium">
                    Name is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Photo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Upload Your Photo"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-xs font-medium">
                    Photo is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs font-medium">
                    Email is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className="text-red-600 text-xs font-medium">
                    Password is required. Please provide minimum 6 characters.
                  </span>
                )}
              </div>
              <div className="my-8">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-block hover:skeleton hover:rounded-none bg-[#ba68c8] hover:bg-[#ba68c8] text-white hover:text-white text-lg rounded-none text-white]"
                />
              </div>
            </form>
            <div>
              <div className="divider mx-6 divider-primary">
                <span className="text-[#1f2937]">OR</span>
              </div>
              <GoogleSignIn method={"Up"} />
            </div>
            <div className="text-center text-sm my-8 text-[#37474f] font-semibold">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#703e78]">
                Sign In
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center mb-12 lg:mb-0">
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
