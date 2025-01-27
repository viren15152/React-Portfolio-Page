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
              Welcome to my portfolio, built using **React.js** 
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a passionate web developer specialising in front-end and back-end development with expertise in HTML, CSS, JavaScript, and frameworks like Bootstrap, Bulma, and Tailwind CSS. On the back end, I work with Node.js, Express.js, and the MERN stack, creating dynamic, responsive applications. I have experience designing RESTful APIs, integrating third-party services, and working with databases (SQL/NoSQL), GraphQL, and MVC architecture. Proficient in Git, Agile workflows, and testing with Jest, I refined my skills and passion for development at the University of Birmingham.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;