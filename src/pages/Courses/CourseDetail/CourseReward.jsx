import { GrCertificate } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { GiSkills } from "react-icons/gi";

const CourseReward = () => {
  const rewards = [
    {
      title: "Certificate",
      logo: <GrCertificate className="w-12 h-12" />,
    },
    {
      title: "Learning Companion",
      logo: <IoIosPeople className="w-12 h-12" />,
    },
    {
      title: "A New Skill",
      logo: <GiSkills className="w-12 h-12" />,
    },
  ];
  return (
    <>
      <section
        className="my-8 bg-[#fafafa] w-full "
        data-aos="fade-up-right"
        data-aos-duration="2000" // Animation duration in milliseconds
      >
        <h1
          className="text-[#703e78] font-bold text-xl lg:text-2xl text-center"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          Course Benefits Bundle
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 mx-3">
          {rewards.map((reward, index) => (
            <div key={index} className="">
              <div
                className="bg-[#fafafa] text-[#703e78] h-28 rounded-lg shadow-lg shadow-[#dcb3e4]"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                <h1 className="text-center font-semibold pt-2">
                  {reward.title}
                </h1>
                <div className="flex justify-center items-center m-4">
                  {reward.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseReward;
