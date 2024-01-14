import img from "../../../assets/images/courseImages/10.jpg";

const CourseDetail = () => {
  return (
    <div>
      <div className="md:flex justify-evenly">
        <div>
          <img src={img} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseDetail;
