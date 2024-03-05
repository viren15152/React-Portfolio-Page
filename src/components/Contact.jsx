import React from 'react';

const Contact = () => {
  const email = 'viren15152@gmail.com'; 
  const subject = encodeURIComponent('Message from my website');
  const body = encodeURIComponent('Write your message here.');

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me an email</p>
        </div>
        <a href={mailtoLink} className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>SEND EMAIL</a>
      </div>
    </div>
  );
};

export default Contact;
