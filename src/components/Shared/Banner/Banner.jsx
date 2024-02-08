import banner from "../../../../src/assets/images/banner/coursesBanner.png";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src={banner} alt="" className="w-2/3 lg:h-[500px] lg:my-8"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
