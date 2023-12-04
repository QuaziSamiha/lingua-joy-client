import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ban1 from "../../../assets/images/home/ban1.png";
import ban2 from "../../../assets/images/home/ban2.png";
import ban3 from "../../../assets/images/home/ban3.png";
import ban4 from "../../../assets/images/home/ban4.png";
import ban5 from "../../../assets/images/home/ban5.png";
import ban6 from "../../../assets/images/home/ban6.png";
function ban() {
  return (
    <>
      <section>
        <Carousel autoPlay="true" className="">
          <div>
            <img className="relative" src={ban1} />
            <div className="text-5xl absolute top-80 font-bold -mt-36 ml-36 pr-20 -pt-32 text-left">
              <h1>hello world</h1>
            </div>
          </div>
          <div>
            <img src={ban2} />
            <h1 className="text-5xl font-bold -mt-32 text-left mx-24">
              hwlllll
            </h1>
          </div>
          <div>
            <img src={ban5} />
          </div>
          <div>
            <img src={ban3} />
          </div>
          <div>
            <img src={ban6} />
          </div>
          <div className="border">
            <img src={ban4} />
          </div>
        </Carousel>
      </section>
    </>
  );
}

export default ban;
