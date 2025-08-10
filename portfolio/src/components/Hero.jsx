
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedinIn,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import Profile from './Profile';

function Hero() {
  return (
    <div className="bg-gray-100 pb-4 px-4 sm:px-8 md:px-20 md:py-6 overflow-x-hidden flex flex-col-reverse md:flex-row items-center md:items-start justify-between container mx-auto">
  {/* Left Content */}
  <div className="flex flex-col space-y-4 w-full md:w-1/2">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Hi, I'm Felix</h1>
    <h2 className="text-base sm:text-lg md:text-xl text-purple-500 font-medium">
      Full Stack Developer
    </h2>
    <p className="text-gray-600 leading-6 text-sm sm:text-base">
      I craft interfaces with the spirit of poetry and logic. Bringing
      designs into forms you can feel on the screen.
    </p>

    {/* Socials */}
    <div className="pt-4">
      <p className="font-semibold text-sm sm:text-base">Follow me on:</p>
      <div className="flex flex-wrap text-lg sm:text-xl space-x-4 mt-2">
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
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:space-x-4 gap-4 text-gray-600">
        {[
          { value: "1+", label: "years of experience" },
          { value: "10+", label: "projects completed" },
          { value: "10+", label: "Happy Clients" },
          { value: "5", label: "Tech Stacks Mastered" },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-md shadow-xl bg-white py-2 px-4 text-center flex-1"
          >
            <p className="leading-tight">
              <span className="block text-lg sm:text-xl font-bold">{stat.value}</span>
              <span className="text-xs sm:text-sm">{stat.label}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right Side - Profile image */}
  <aside className="w-full md:w-1/2 flex justify-center md:justify-end pt-8 md:pt-0">
    <div className="max-w-xs sm:max-w-sm md:max-w-md">
      <Profile />
    </div>
  </aside>
</div>

  );
}

export default Hero;
