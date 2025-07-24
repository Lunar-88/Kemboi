
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,faLinkedinIn,faInstagram,faXTwitter,faHtml5,faSquareJs,faNode,faCss3Alt,faReact
} from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center md:items-start justify-between space-y-10 md:space-y-0 container mx-auto">
      {/* Left Content */}
      <div className="flex flex-col space-y-4 w-full md:w-1/2">
        <h1 className="font-bold text-4xl sm:text-5xl">Hi, I'm Felix</h1>
        <h2 className="text-lg sm:text-xl text-purple-500 font-medium">
          Full Stack Developer
        </h2>
        <p className="text-gray-600 leading-6 text-base">
          I craft interfaces with the spirit of poetry and logic. Bringing
          designs into forms you can feel on the screen.
        </p>

        {/* Socials */}
        <div className="pt-4">
          <p className="font-semibold">Follow me on:</p>
          <div className="flex text-xl sm:text-2xl space-x-4 mt-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-black p-2 rounded-full hover:text-gray-600"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-blue-500 p-2 rounded-full hover:text-gray-600"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-600 p-2 rounded-full hover:text-gray-600"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-black p-2 rounded-full hover:text-gray-600"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Download CV
          </button>
          <button className="text-black font-semibold px-4 py-2 border-2 rounded-xl hover:bg-gray-300">
            Contact Me
          </button>
        </div>

        {/* Quick Stats */}
        <div className="pt-6">
          <p className="text-black font-semibold pb-2">Quick Stats:</p>
          <div className="grid grid-cols-2 sm:flex sm:space-x-4 gap-4 text-gray-600">
            <div className="rounded-md shadow-xl bg-white py-2 px-4 text-center">
              <p className="leading-tight">
                <span className="block text-xl font-bold">1+</span>
                <span className="text-sm">years of experience</span>
              </p>
            </div>
            <div className="rounded-md shadow-xl bg-white py-2 px-4 text-center">
              <p className="leading-tight">
                <span className="block text-xl font-bold">10+</span>
                <span className="text-sm">projects completed</span>
              </p>
            </div>
            <div className="rounded-md shadow-xl bg-white py-2 px-4 text-center">
              <p className="leading-tight">
                <span className="block text-xl font-bold">10+</span>
                <span className="text-sm">Happy Clients</span>
              </p>
            </div>
            <div className="rounded-md shadow-xl bg-white py-2 px-4 text-center">
              <p className="leading-tight">
                <span className="block text-xl font-bold">5</span>
                <span className="text-sm">Tech Stacks Mastered</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <aside className="w-full md:w-1/2 flex justify-center md:justify-end pt-10">
  <div className="relative w-56 h-56 md:w-72 md:h-72">
    {/* Profile Image */}
    <img
      src="Kemboi.png"
      alt="Felix Profile"
      className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-purple-500 object-cover shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    />

    {/* Orbiting Icons (Pushed further out) */}
    <FontAwesomeIcon
      icon={faReact}
      className="absolute text-blue-400 text-2xl md:text-3xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
    />
    <FontAwesomeIcon
      icon={faHtml5}
      className="absolute text-orange-500 text-2xl md:text-3xl top-1/4 left-0 transform -translate-x-full -translate-y-1/2"
    />
    <FontAwesomeIcon
      icon={faCss3Alt}
      className="absolute text-blue-500 text-2xl md:text-3xl bottom-1/4 left-0 transform -translate-x-full translate-y-1/2"
    />
    <FontAwesomeIcon
      icon={faSquareJs}
      className="absolute text-yellow-500 text-2xl md:text-3xl bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
    />
    <FontAwesomeIcon
      icon={faNode}
      className="absolute text-green-500 text-2xl md:text-3xl bottom-1/4 right-0 transform translate-x-full translate-y-1/2"
    />
    <FontAwesomeIcon
      icon={faGithub}
      className="absolute text-black text-2xl md:text-3xl top-1/4 right-0 transform translate-x-full -translate-y-1/2"
    />
    <img
      src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
      alt="Tailwind CSS"
      className="absolute w-6 h-6 md:w-7 md:h-7 bg-white rounded-full top-1/2 left-0 transform -translate-x-full -translate-y-1/2"
    />
  </div>
</aside>

    </div>
  );
}

export default Hero;
