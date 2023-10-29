import appStore from "@/assets/images/icons/app-store.svg";
import logo from "@/assets/images/icons/logo.JPG";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-8 lg:mt-16">
      <div className="border"></div>
      <div className="text-center space-y-2 lg:space-y-4 p-5 lg:p-7">
        <Image className="mx-auto" src={logo} alt="logo" />
        <p className="lg:text-lg tracking-wide font-medium lg:font-bold primary-color">ahead</p>
        <div className="text-sm font-medium text-gray-700 space-x-3 lg:space-x-6">
          <span className="inline-flex items-center">
            <span className="bg-[#96F1D7] rounded-full p-1">
              <FaMapMarkerAlt />
            </span>
            <span>AuguststraBe 26, 10117 Berlin</span>
          </span>
          <span className="inline-flex items-center">
            <span className="bg-[#96F1D7] rounded-full p-1">
              <FaEnvelope />
            </span>
            <span>hi@ahead-app.com</span>
          </span>
        </div>
        <Image className="mx-auto" src={appStore} alt="app-store" />
        <p className="text-xs text-gray-600 font-medium">© 2022 Aheod app. All right reserved</p>
      </div>
    </section>
  );
};

export default Footer;
