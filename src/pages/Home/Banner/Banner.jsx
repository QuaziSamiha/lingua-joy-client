import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ban4 from "../../../assets/images/banner/1.jpg";
import ban2 from "../../../assets/images/banner/2.jpg";
import ban1 from "../../../assets/images/banner/4.jpg";
import ban3 from "../../../assets/images/banner/5.jpg";
import ban6 from "../../../assets/images/banner/6.jpg";
import ban5 from "../../../assets/images/banner/8.jpg";
import ban7 from "../../../assets/images/banner/9.jpg";

function ban() {
  const bannerContent = [
    {
      image: ban7,
      title: "Cultural Connect",
      subTitle: "Speak, Share, Understand",
    },
    {
      image: ban6,
      title: "Tongue Tunes",
      subTitle: "Harmony in Languages",
    },
    {
      image: ban5,
      title: "Globe Linguist",
      subTitle: "Explore, Express, Excel",
    },
    {
      image: ban3,
      title: "Tongue Triumph",
      subTitle: "Conquer Language Peaks",
    },
    {
      image: ban4,
      title: "WordWise Wisdom",
      subTitle: "Wise Words, Easy Learning",
    },
    {
      image: ban2,
      title: "Global Speak",
      subTitle: "Learn Anywhere",
    },
    {
      image: ban1,
      title: "SimpleSpeak Academy",
      subTitle: "Easy Lessons, Fluent Conversations",
    },
  ];
  return (
    <>
      <section>
        <Carousel autoPlay="true" className="" showThumbs={false}>
          {bannerContent.map((content, index) => (
            <div key={index} className="relative">
              <div className="">
                <img
                  src={content.image}
                  alt="absolute"
                  className="w-2/3 h-[500px] mb-8"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <h1 className="text-6xl font-bold text-[#703e78]">
                    {content.title}
                  </h1>
                  <h2 className="text-2xl text-[#ba68c8] mt-4 font-semibold">
                    {content.subTitle}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}

export default ban;
