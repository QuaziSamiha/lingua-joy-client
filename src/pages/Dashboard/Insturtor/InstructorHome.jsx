import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const InstructorHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section>
        <div className="text-[#703e78]">
          <p className=" text-3xl font-bold">Welcome {user.displayName} </p>
          <p className="mt-4 font-medium">You are a great teacher...... </p>
          <p className="mt-4 font-medium">
            Upcoming fetures will be shown here.....
          </p>
        </div>
      </section>
    </>
  );
};

export default InstructorHome;
