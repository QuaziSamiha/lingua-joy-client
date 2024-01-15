import { useForm } from "react-hook-form";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="w-full">
        <h1 className="uppercase py-4 text-center text-3xl text-[#703e78] font-bold leading-3">
          add course
        </h1>
        <div className="mx-32 border rounded-lg shadow-lg shadow-[#fafafa] p-2">
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="m-2">
              <div className="flex justify-evenly">
                <div className="form-control my-2 mr-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Course Name: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="course name..."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("courseName", { required: true })}
                  />
                  {errors.courseName && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control my-2 ml-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Course Image: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="course image . . ."
                    className="outline-none border p-2 rounded ml-1"
                    {...register("courseImage", { required: true })}
                  />
                  {errors.courseImage && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="form-control my-2 mr-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Course Time: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={"9:00 am - 11:00 am"}
                    placeholder="course time..."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("courseTime", { required: true })}
                  />
                  {errors.courseTime && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control my-2 ml-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Course Day: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="course day . . ."
                    value={"Thursday, Sunday, Tuesday"}
                    className="outline-none border p-2 rounded ml-1"
                    {...register("courseDay", { required: true })}
                  />
                  {errors.courseDay && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="form-control my-2 mr-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Instructor Name: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="instructor name . . ."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("instructorName", { required: true })}
                  />
                  {errors.instructorName && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control my-2 ml-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Instructor Email: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="course image . . ."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("instructorEmail", { required: true })}
                  />
                  {errors.instructorEmail && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="form-control my-2 mr-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Available Seat: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="available seat . . ."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("availableSeat", { required: true })}
                  />
                  {errors.availableSeat && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control my-2 ml-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Total Students: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={0}
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("totalStudent", { required: true })}
                  />
                  {errors.totalStudent && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="form-control my-2 mr-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Price: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="$ . . ."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="form-control my-2 ml-2 w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Course Status: <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={"Pending"}
                    placeholder="course status . . ."
                    className="outline-none  border p-2 rounded ml-1"
                    {...register("courseStatus", { required: true })}
                  />
                  {errors.courseStatus && (
                    <p className="text-xs text-red-500">
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              <div className="form-control my-2 ml-2 w-full bg-[#ba68c8] hover:bg-[#703e78] text-white py-2 rounded">
                <input type="submit" value="ADD COURSE" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCourse;
