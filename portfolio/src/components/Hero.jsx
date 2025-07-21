import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram, faXTwitter, faHtml5, faSquareJs, faNode, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faFaceSmile, faListCheck, faCode } from '@fortawesome/free-solid-svg-icons';



function Hero() {
  return (
    <div className='flex bg-gray-100 pb-4'>
    <div className="bg-gray-100 pl-28 pb-10 flex flex-col items-start pt-18 space-y-4">
      <h1 className='font-bold text-5xl'>Hi, I'm Felix</h1>
        <h2 className='text-xl text-purple-500 font-medium'>Full Stack Developer|</h2>
      <p className='text-gray-600 leading-6 text-l'>I craft interfaces with the spirit of poetry and logic.Bringing <br/>designs into forms you can feel on the screen.</p>
      
        <div className='flex pt-4'>
            <p className='font-semibold'>Follow me on:</p>
            <div className='flex text-2xl space-x-4 ml-2'>
              <FontAwesomeIcon icon={faGithub} className="text-black p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
              <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500 px-2 py-1.5 bg-gray-100 border-transparent border rounded-full hover:text-gray-600" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-600  p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
              <FontAwesomeIcon icon={faXTwitter} className="text-black p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
            </div>
        </div>
        <div className='flex space-x-4 pt-4'>
            <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'>Download CV</button>
            <button className=' text-black font-semibold px-4 py-2 border-2 rounded-xl hover:bg-gray-300'>Contact Me</button>
        </div>
        <div className='flex flex-col pt-6'>
            <p className='text-black font-semibold pb-2'>Quick Stats:</p>
            <div className='flex space-x-4 text-gray-600'>
                <div className='flex border-transparent py-4 rounded-2xl bg-white shadow-2xl '>
                   <FontAwesomeIcon icon={faBriefcase} className='p-1.5 text-l'></FontAwesomeIcon>
                   <p className='leading-4 pr-2 py-1'>1+ <br/>years of experience</p>
                </div>
                <div className='flex border-transparent py-4 rounded-2xl bg-white shadow-2xl '>
                    <FontAwesomeIcon icon={faListCheck} className='p-1.5 text-l'></FontAwesomeIcon>
                    <p className='leading-4 pr-2 py-1'>10+ <br/>projects completed</p>
                </div>
                <div className='flex border-transparent py-4 rounded-2xl bg-white shadow-2xl'>
                    <FontAwesomeIcon icon={faFaceSmile} className='p-1.5 text-l'></FontAwesomeIcon>
                    <p className='leading-4 pr-2 py-1'>10+ <br/>Happy Clients</p>
                </div>
                <div className='flex border-transparent pt-4 rounded-2xl bg-white shadow-2xl'>
                    <FontAwesomeIcon icon={faCode} className='p-1.5 pr-2 text-l'></FontAwesomeIcon>
                    <p className='leading-4 pr-2 py-1'>5 <br/>Tech Stacks Mastered</p>
                </div>
            </div>
        </div>
    </div>
    <aside>
        <div className='flex py-4 rounded-2xl pt-28 pl-18 scale-[2.5]'>
            <FontAwesomeIcon icon={faReact} className='text-blue-400 pt-10 ' />
            <FontAwesomeIcon icon={faHtml5} className='text-orange-500' />
            <FontAwesomeIcon icon={faCss3Alt} className='text-blue-500 pr-6 pt-20' />
            <img src="Kemboi.png" alt="Profile" className='w-32 h-32 rounded-full border-2 border-purple-500' />
            <FontAwesomeIcon icon={faSquareJs} className='text-yellow-500 pl-2' />
            <img
              src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
              alt="Tailwind CSS"
              className="w-4 h-4 text-purple-500 bg-gray-200 rounded-full mt-10 "
            />
            <FontAwesomeIcon icon={faNode} className='text-green-500  pt-22 pr-10' />
        </div>
    </aside>
    </div>
  );
}
export default Hero;