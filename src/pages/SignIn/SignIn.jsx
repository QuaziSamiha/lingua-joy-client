import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/others/sign-in.png";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  console.log("from: ", from);
  console.log("location: ", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <>
      <section className="my-16 font-Outfit">
        <div className="flex justify-around items-center">
          <div className="w-[500px] h-[500px]">
            <h1 className="text-center font-bold text-3xl uppercase text-[#37474f]">
              Sign In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="m-6">
              {error ? (
                <>
                  <p className="text-red-500 text-xs text-center">
                    Invalid Credintials
                  </p>
                </>
              ) : (
                <></>
              )}

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
                <div className="flex justify-between border-[#37474f] w-full border-b">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Your Password"
                    className=" outline-none  pl-1"
                    {...register("password", { required: true })}
                  />{" "}
                  {showPassword ? (
                    <button
                      type="button"
                      onClick={() => setShowPassword(false)}
                    >
                      <FaEye className="text-[#9cb7d8] mt-2 mr-2" />
                    </button>
                  ) : (
                    <button type="button" onClick={() => setShowPassword(true)}>
                      <FaEyeSlash className="text-[#9cb7d8] mt-2 mr-2" />
                    </button>
                  )}
                </div>
                {errors.password && (
                  <span className="text-red-600 text-xs font-medium">
                    Password is required
                  </span>
                )}
              </div>
              <div className="my-8">
                <input
                  type="submit"
                  value="Sign In"
                  className="tracking-wide font-medium btn btn-block hover:skeleton hover:rounded-none bg-[#ba68c8] hover:bg-[#ba68c8] text-white hover:text-white text-lg rounded-none text-white]"
                />
              </div>
            </form>
            <div>
              <div className="divider mx-6 divider-primary">
                <span className="text-[#1f2937]">OR</span>
              </div>
              <GoogleSignIn method={"In"} />
            </div>
            <div className="text-center text-sm my-8 text-[#37474f]  font-semibold">
              New to LinguaJoy?{" "}
              <Link to="/signup" className="text-[#703e78] font-bold">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="w-[500px] h-[500px]">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
