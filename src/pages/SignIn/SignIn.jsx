import { Link } from "react-router-dom";
import image from "../../assets/images/others/sign-in.png";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="my-16">
        <div className="flex justify-around items-center">
          <div className="border w-[500px]">
            <h1 className="text-center font-bold text-3xl uppercase text-[#37474f]">
              Sign In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="m-6">
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
                  {...register("email")}
                />
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
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="my-8">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-block bg-[#ba68c8] text-white text-lg rounded-none text-white]"
                />
              </div>
            </form>
            <div>
              <div className="flex justify-center items-center">
                <div className="border-t border-[#37474f] w-52"></div>
                <p className="text-center #37474f text-sm px-2 font-semibold">
                  Or
                </p>
                <div className="border-t border-[#37474f] w-52"></div>
              </div>
              <div className="m-6">
                <button className="btn btn-block bg-base-300 rounded-none text-lg font-semibold">
                  Sing In with Google
                </button>
              </div>
            </div>
            <div className="text-center text-sm my-6 text-[#37474f]  font-semibold">
              New to LinguaJoy? <Link className="text-[#703e78]">Sign Up</Link>
            </div>
          </div>
          <div className="w-[500px] border h-[500px]">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
