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
                Welcome to my portfolio page built with React.js.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am proficient in web development, specializing in HTML, CSS, JavaScript (ES6+), and jQuery for front-end design, utilizing frameworks such as Bootstrap, Bulma, and Tailwind CSS. On the back end, I work with Node.js, Express.js, and API integration, including web, third-party, and server-side APIs. My experience encompasses the MERN stack (MongoDB, Express, React, Node.js), progressive web applications (PWAs), and database management with SQL, MySQL, and NoSQL. I utilize GraphQL for efficient data management, enhancing my ability to deliver dynamic, scalable web applications.I have a solid understanding of Object-Oriented Programming (OOP) and the Model-View-Controller (MVC) architecture. I am skilled in version control with Git, familiar with Agile methodologies, and experienced in testing with Jest. I completed my studies at the University of Birmingham.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;