
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode,faHouse,faPhone,faCircleInfo,faBookOpen,faListCheck,faBars,faTimes} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 px-6 py-4 border shadow-lg rounded-b-2xl border-gray-200 overflow-x-hidden">
  <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
    {/* Logo */}
    <div className="text-black text-xl font-semibold flex items-center">
      <FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />
      My Portfolio
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex flex-wrap space-x-6 font-medium bg-white px-4 py-2 rounded-full border border-gray-300">
      <li><a href="/home" className="flex items-center"><FontAwesomeIcon icon={faHouse} className="text-purple-500 mr-2" />Home</a></li>
      <li><a href="/about" className="flex items-center"><FontAwesomeIcon icon={faCircleInfo} className="text-purple-500 mr-2" />About me</a></li>
      <li><a href="/education" className="flex items-center"><FontAwesomeIcon icon={faBookOpen} className="text-purple-500 mr-2" />Education</a></li>
      <li><a href="/skills" className="flex items-center"><FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />Skills</a></li>
      <li><a href="/projects" className="flex items-center"><FontAwesomeIcon icon={faListCheck} className="text-purple-500 mr-2" />Projects</a></li>
      <li><a href="/contact" className="flex items-center"><FontAwesomeIcon icon={faPhone} className="text-purple-500 mr-2" />Contact</a></li>
    </ul>

    {/* Hamburger Icon */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-purple-500 focus:outline-none">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <ul className="md:hidden mt-4 space-y-4 font-medium bg-white rounded-xl p-4 border border-gray-300 max-w-full overflow-x-hidden">
      <li><a href="/home" className="flex items-center"><FontAwesomeIcon icon={faHouse} className="text-purple-500 mr-2" />Home</a></li>
      <li><a href="/about" className="flex items-center"><FontAwesomeIcon icon={faCircleInfo} className="text-purple-500 mr-2" />About me</a></li>
      <li><a href="/education" className="flex items-center"><FontAwesomeIcon icon={faBookOpen} className="text-purple-500 mr-2" />Education</a></li>
      <li><a href="/skills" className="flex items-center"><FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />Skills</a></li>
      <li><a href="/projects" className="flex items-center"><FontAwesomeIcon icon={faListCheck} className="text-purple-500 mr-2" />Projects</a></li>
      <li><a href="/contact" className="flex items-center"><FontAwesomeIcon icon={faPhone} className="text-purple-500 mr-2" />Contact</a></li>
    </ul>
  )}
</nav>

  );
}

export default Navbar;
