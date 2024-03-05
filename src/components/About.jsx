import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hello my name is Viren Lala. Please take a
                look around at my portfolio page built with REACT.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I'm a currently studying to become a Full Stack Web Developer. I have successfully designed and implemented numerous projects, showcasing my ability to deliver high-quality solutions. I am skilled in both front-end and back-end development, utilizing languages such as HTML, CSS and JavaScript,

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;