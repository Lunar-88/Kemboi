
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faIdCard, faHeart, faGlobe, faPhone, faBook } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 pt-8 pb-10">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold mb-3 text-center">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-gray-500 font-semibold pb-4 text-center">
          Discover my journey, passion and the story behind my work.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg p-6 gap-6">
        {/* Image */}
        <img
          src="Kemboi.png"
          alt="Kemboi"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-md mx-auto"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full">
          {/* Bio / Hobbies / Languages */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 p-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faIdCard} className="p-1.5 text-xl rounded-2xl bg-sky-300" />
                <h3 className="text-xl font-semibold">Bio</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                I'm a Full Stack Developer with a passion for crafting intuitive and engaging web applications. My journey in tech has been fueled by curiosity and a desire to create impactful solutions.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faHeart} className="p-1.5 text-xl rounded-2xl bg-green-400" />
                <h3 className="text-xl font-semibold">Hobbies</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Enjoy playing video games (FIFA & Call of Duty), reading novels, and exploring the outdoors. I believe in maintaining a balance between work and play to keep my creativity flowing.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="p-1.5 text-xl rounded-2xl bg-amber-400" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Fluent in English and Kiswahili. I’m always open to learning new languages to enhance communication and connect with a wider audience.
              </p>
            </div>
          </div>

          {/* Contact / Location / Education */}
          <div className="flex flex-col md:flex-row gap-6 p-4">
            <div className="flex-1">
              <div className="flex space-x-2">
                <FontAwesomeIcon icon={faPhone} className="p-1.5 text-xl rounded-2xl bg-green-400" />
                <h3 className="text-xl font-semibold">Contact</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Email: felixkemboi824@gmail.com <br />
                Phone: +254 759306105 <br />
                WhatsApp: +254 759306105
              </p>
            </div>

            <div className="flex-1">
              <div className="flex space-x-2">
                <FontAwesomeIcon icon={faLocationArrow} className="p-1.5 text-xl rounded-2xl bg-red-300" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Based in Nairobi, Kenya. Open to remote work and collaborations worldwide.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex space-x-2">
                <FontAwesomeIcon icon={faBook} className="p-2 text-l rounded-2xl bg-green-600" />
                <h3 className="text-xl font-semibold">Education Summary</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Graduated from a Full-Stack BootCamp (Moringa School). Currently pursuing Software Engineering at JKUAT University.
              </p>
            </div>
          </div>

          {/* Socials & Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 p-4">
            <div className="flex items-center space-x-4">
              <p className="font-semibold">Follow me on:</p>
              <div className="flex text-2xl space-x-4">
                <FontAwesomeIcon icon={faGithub} className="text-black p-1.5 bg-gray-100 rounded-full hover:text-gray-600" />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500 px-2 py-1.5 bg-gray-100 rounded-full hover:text-gray-600" />
                <FontAwesomeIcon icon={faInstagram} className="text-pink-600 p-1.5 bg-gray-100 rounded-full hover:text-gray-600" />
                <FontAwesomeIcon icon={faXTwitter} className="text-black p-1.5 bg-gray-100 rounded-full hover:text-gray-600" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                Download CV
              </button>
              <button className="text-black font-semibold px-4 py-2 border-2 rounded-xl hover:bg-gray-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
