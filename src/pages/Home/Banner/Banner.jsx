import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ban1 from "../../../assets/images/banner/ban1.png";
import ban2 from "../../../assets/images/banner/ban2.png";
import ban4 from "../../../assets/images/banner/1.jpg";
import ban5 from "../../../assets/images/banner/16.jpg";
import ban6 from "../../../assets/images/banner/6.jpg";
import ban7 from "../../../assets/images/banner/14.jpg";
import ban3 from "../../../assets/images/banner/5.jpg";

function ban() {
  const images = [ban1, ban2, ban3, ban4, ban5, ban6, ban7];
  return (
    <>
      <section>
        <Carousel autoPlay="true" className="">
          {images.map((image, index) => (
            <div key={index}>
              <img className="relative" src={image} />
              <h1 className="absolute">hello world</h1>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}

export default ban;
