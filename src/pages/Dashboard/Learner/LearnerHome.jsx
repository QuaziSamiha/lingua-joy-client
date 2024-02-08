import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const LearnerHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section>
        <div className="text-[#703e78]">
          <p className=" text-3xl font-bold">Welcome {user.displayName} </p>
          <p className="mt-4 font-medium">Happy Learning...... </p>
          <p className="mt-4 font-medium">
            Upcoming fetures will be shown here.....
          </p>
        </div>
      </section>
    </>
  );
};

export default LearnerHome;
