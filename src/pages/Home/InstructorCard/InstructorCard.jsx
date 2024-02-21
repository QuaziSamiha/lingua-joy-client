const InstructorCard = ({ topInstructor }) => {
  // console.log(topInstructor);
  const { userName, userPhoto, userEmail } = topInstructor;
  return (
    <div
      className="shadow-lg rounded-lg border-indigo-600"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="m-2">
        <div className="flex justify-center">
          <img
            src={userPhoto}
            className="h-32 w-32 rounded-lg"
            alt=""
          />
        </div>
        <div className="my-2 text-center">
          <h1 className="text-[#703e78] font-bold text-lg mb-1">{userName}</h1>
          <p className="text-[#703e78] font-medium">{userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
