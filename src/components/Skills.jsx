import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Technical Skills</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" 
                    alt="HTML5 Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=for-the-badge" 
                    alt="CSS Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge"
                    alt="JavaScript Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge"
                    alt="React Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white&style=for-the-badge"
                    alt="C# Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge"
                    alt="Node.js Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=for-the-badge"
                    alt="MongoDB Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=fff&style=for-the-badge"
                    alt=".NET Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=for-the-badge"
                    alt="MySQL Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge"
                    alt="PostgreSQL Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=fff&style=for-the-badge"
                    alt="GraphQL Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=fff&style=for-the-badge"
                    alt="jQuery Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge"
                    alt="Tailwind CSS Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge"
                    alt="Bootstrap Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=for-the-badge"
                    alt="GitHub Badge" 
                  />
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center'>
                  <img 
                    className='my-4'
                    src="https://img.shields.io/badge/macOS-000?logo=macos&logoColor=fff&style=for-the-badge"
                    alt="macOS Badge" 
                  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;

