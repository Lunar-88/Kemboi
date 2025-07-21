import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHouse, faPhone, faCircleInfo, faBookOpen, faListCheck } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="bg-gray-200 py-4 px-6 border shadow-4xl rounded-b-2xl border-gray-200 flex justify-between items-center">
      <div className="text-black text-xl font-semibold">
      <FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />
        My Portfolio
      </div>
      <div className='pr-24'>
      <div className='border border-gray-300 rounded-3xl px-8 py-2'>
      <ul className="flex font-medium space-x-14">
        <li><a href="/home"></a><FontAwesomeIcon icon={faHouse} className="text-purple-500 mr-2" />Home</li>
        <li><a href="/about"><FontAwesomeIcon icon={faCircleInfo} className="text-purple-500 mr-2" />About me</a></li>
        <li><a href="/education"><FontAwesomeIcon icon={faBookOpen} className="text-purple-500 mr-2" />Education</a></li>
        <li><a href="/skills"><FontAwesomeIcon icon={faCode} className="text-purple-500 mr-2" />Skills</a></li>
        <li><a href="/projects"><FontAwesomeIcon icon={faListCheck} className="text-purple-500 mr-2" />Projects</a></li>
        <li><a href="/contact"><FontAwesomeIcon icon={faPhone} className="text-purple-500 mr-2" />Contact</a></li>
      </ul>
      </div>
      </div>
    </nav>
  );
}
export default Navbar;