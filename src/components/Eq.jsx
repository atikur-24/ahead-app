"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { React, useEffect } from "react";

const Eq = ({ title, subTitle, firstContent, secondContent }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="my-container">
      <div data-aos="fade-up" className="px-10 lg:px-16 lg:flex gap-5 space-y-3 lg:space-y-0">
        <h1 className="text-lg md:text-2xl lg:text-3xl tracking-wide font-semibold lg:font-bold mr-36 whitespace-nowrap">
          {title} <br /> {subTitle}
        </h1>
        <p className="leading-6 lg:leading-7 lg:font-medium">{firstContent}</p>
        <p className="leading-6 lg:leading-7 lg:font-medium">{secondContent}</p>
      </div>
    </section>
  );
};

export default Eq;
