import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">Hi,my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] tracking-widest">
          Vishwa
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#8892b0] font-semibold text-lg py-4 max-w-[700px]">
          Hello! I'm Vishwa , and I'm excited to kickstart my journey as a
          Front-End Developer. I love creating websites that look great and are
          easy to use. I'm familiar with HTML, CSS, JavaScript, Tailwind and
          React, and I'm eager to learn more and build awesome projects!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-lg">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>

            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
