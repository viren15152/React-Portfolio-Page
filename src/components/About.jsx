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
              Welcome to my portfolio.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Welcome to my portfolio, where I showcase my passion for web development.

I specialise in both front-end and back-end development, with experience in HTML, CSS, JavaScript, and frameworks like Bootstrap, Bulma, and Tailwind CSS. On the back end, I work with Node.js, Express.js, and the MERN stack (MongoDB, Express, React, Node.js), building scalable and performant web applications.

I also have experience with databases (SQL/NoSQL), GraphQL, Object-Oriented Programming (OOP), MVC architecture, Git version control, Agile methodologies, and testing with Jest. I graduated from the University of Birmingham, refining my skills and passion for development.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;