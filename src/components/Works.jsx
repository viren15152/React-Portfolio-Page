import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Here are some of the projects that I have completed</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div
            style= {{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Sakura Stream
              </span>
              <p className='text-center'>Sakura Stream is a vibrant and engaging platform designed for anime enthusiasts who seek a dedicated space to explore and save their favorite anime shows.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://sakura-stream-1-wm0f.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/viren15152/sakura-stream' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Justice League Profiles 
              </span>
              <p className='text-center'>Justice League Profiles is an ASP.NET Core Razor Pages application that displays profiles of iconic DC superheroes and villains.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://justice-league-profiles.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/viren15152/Justice-League-Profiles' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                SVG-Logo-Maker
              </span>
              <p className='text-center'>This application enables users to enter inputs into an inquirer prompt in order to generate a logo within a "logo.svg" file.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://drive.google.com/file/d/1P34TPMfR3ei4cyN-MbqK01m_5Pdrre5n/view' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Video-Link
                  </button>
                </a>
                {}
                <a href='https://github.com/viren15152/Object-Orientated-Programming-SVG-Logo-Maker' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                PWA Text Editor
              </span>
              <p className='text-center'>J.A.T.E is a Progressive Web Application PWA that runs in the browser, offline and can be installed locally to your machine.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://progressive-web-applications-pwa-text-w3iw.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/viren15152/Progressive-Web-Applications-PWA-Text-Editor' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Discover Me
              </span>
              <p className='text-center'>DiscoverMe is an ASP.NET Core web application that allows users to search for places, get directions, and save favorite locations.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://github.com/viren15152/DiscoverMe' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://discoverme-oth2.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Weather Dashboard
              </span>
              <p className='text-center'>Weather dashboard that will present the user with todays current weather data and then a 5 day forecast for the proceeding dates.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://viren15152.github.io/06-Weather-Dashboard-Server-Side-APIs-Viren/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/viren15152/06-Weather-Dashboard-Server-Side-APIs-Viren' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

