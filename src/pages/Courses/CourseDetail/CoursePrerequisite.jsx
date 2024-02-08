const CoursePrerequisite = () => {
  const requirements = [
    {
      title: "Open Mind",
      description:
        "Embrace a positive mindset for language learning. Be open to new experiences, cultures, and challenges.",
    },
    {
      title: "Tools of the Trade",
      description:
        "Equip yourself with a pen and notebook. These tools will be your companions, helping you jot down notes and track progress.",
    },
    {
      title: "Punctuality Matters",
      description:
        "Attend classes on time. Consistency is key for a successful language learning journey.",
    },
    {
      title: "Practice, Practice",
      description:
        "Dedicate time outside of class for language practice. Consistent practice reinforces your learning.",
    },
    {
      title: "Curiosity Welcome",
      description:
        "Foster a curious mindset and ask questions. Curiosity sparks conversations and deepens understanding.",
    },
    {
      title: "Tech-Ready Learning",
      description:
        "Ensure you have the necessary tech tools for online learning. A smooth tech experience enhances your overall journey.",
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
          className="text-[#703e78] font-bold mt-2 lg:mt-0 text-xl lg:text-2xl text-center"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          Before You Begin
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 mx-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="">
              <div
                className="bg-[#fafafa] text-[#703e78] h-28 rounded-lg shadow-lg shadow-[#dcb3e4]"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                <h1
                  className="text-center font-semibold pt-2"
                  data-aos="fade-up-right"
                  data-aos-duration="2000"
                >
                  {requirement.title}
                </h1>
                <p
                  className="text-xs text-justify px-4 py-1"
                  data-aos="fade-up-right"
                  data-aos-duration="2000"
                >
                  {requirement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursePrerequisite;
