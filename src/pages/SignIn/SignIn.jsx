import image from "../../assets/images/others/sign-in.png";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="my-16">
        <div className="flex justify-around items-center">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" {...register("example")} />
              <br />
              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input type="submit" value="Sign in" className="btn btn-block bg-[#ba68c8 text-white]"/>
            </form>
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
