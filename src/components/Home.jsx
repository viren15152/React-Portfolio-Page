import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/Tiger.avif';  
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, I'm Viren
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I'm a Full-Stack Web Developer from the UK 🇬🇧
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:ml-8 w-full mt-8 md:mt-0">
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;



