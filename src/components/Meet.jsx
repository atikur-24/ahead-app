import meetBanner from "@/assets/images/banner/meet-banner.png";
import Image from "next/image";

const Meet = () => {
  return (
    <section className="my-container relative">
      <Image className="object-cover w-full rounded-xl lg:rounded-3xl" src={meetBanner} alt="banner" />
      <div className="absolute top-36 lg:top-52 ml-5 md:ml-8 lg:ml-12 w-1/2 space-y-2 lg:space-y-4">
        <p className="text-sm lg:text-base tracking-wide font-medium">Build out of frustration</p>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold tracking-wide lg:tracking-wider">Meet the ahead app</h1>
      </div>
      <div className="absolute left-1/2 mx-8 lg:mx-20 top-1/3 lg:top-1/2 space-y-6 font-medium text-gray-600">
        <p className="text-xs lg:text-base lg:leading-7">
          A personalized pocket coach that provides bite- <br /> sized, science-driven tools to boost emotional <br /> intelligence.
        </p>
        <p className="text-xs lg:text-base lg:leading-7">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
      </div>
    </section>
  );
};

export default Meet;
