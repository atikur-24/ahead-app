import banner from "@/assets/images/banner/banner.jpg";
import appStore from "@/assets/images/icons/app-store.svg";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#FDCC0D",
  inactiveFillColor: "#fbf1a9",
};

const Banner = () => {
  return (
    <section className="my-container">
      <Image className="object-cover w-full rounded-xl lg:rounded-3xl" src={banner} alt="banner" />
      <div className="absolute top-1/2 ml-5 md:ml-8 lg:ml-12 w-1/2 space-y-2 lg:space-y-4">
        <p className="text-sm lg:text-base tracking-wide font-medium">Ahead app</p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold lg:font-extrabold tracking-wide lg:tracking-wider">
          Master your life <br /> by mastering <br /> emotions
        </h1>
        <div className="flex gap-3 lg:gap-6 pt-2 lg:pt-6">
          <Image src={appStore} alt="app-store" />
          <div>
            <Rating style={{ maxWidth: 120 }} value={5} itemStyles={myStyles} readOnly />
            <p>100+ AppStore reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
