import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUsers, faTools, faLaptop, faServer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faSquareJs, faNode, faCss3Alt, faReact, faPython, faJs, faLaravel, faPhp, faAws } from '@fortawesome/free-brands-svg-icons'

function SkillsExpertise() {
  return (
    <div className="p-8 bg-gray-100 text-gray-800 text-center">
        <div>
      <h2 className='text-3xl font-bold pb-4'>Skills & <span className='text-purple-500'>Expertise</span></h2>
        <p className='text-gray-600 font-semibold mb-8'>
            Technical competencies and professional skills I've through experience.
        </p>
        </div>

        <div className=' font-semibold text-gray-700 text-lg border-transparent rounded-4xl bg-white px-4 shadow-2xl py-3 mb-8 min-w-[300px] max-w-[600px] mx-auto'>
            <ul className='flex justify-center space-x-20'>
                <li><FontAwesomeIcon icon={faCode} className='px-1.5 text-l'></FontAwesomeIcon>Technical</li>
                <li><FontAwesomeIcon icon={faUsers} className='px-1.5 text-xl'></FontAwesomeIcon>Soft Skills</li>
                <li><FontAwesomeIcon icon={faTools} className='px-1.5 text-xl'></FontAwesomeIcon>Tools</li>
            </ul>
        </div>
        <div className='flex justify-center items-start flex-wrap gap-8'>
            <div className='border-transparent rounded-2xl bg-white px-8 py-6 shadow-lg'>
                <h3 className='text-l font-bold mb-4'><FontAwesomeIcon icon={faLaptop} className='text-sky-500 pr-2' />Frontend Development</h3>
                <ul className='text-start'>
                  <li><FontAwesomeIcon icon={faSquareJs} className='text-amber-400 pr-2' />JavaScript</li>
                  <li><FontAwesomeIcon icon={faReact} className='text-blue-400 pr-2' />React.js</li>
                  <li><FontAwesomeIcon icon={faCss3Alt} className='text-blue-400 pr-2' />CSS3</li>
                  <li><FontAwesomeIcon icon={faHtml5} className='text-orange-400 pr-2' />HTML5</li>
                  <li><FontAwesomeIcon icon={faPython} className='text-green-500 pr-2' />Python</li>
                  <li className='flex'><img
                      src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                      alt="Tailwind CSS"
                      className="w-4 h-4 text-purple-500 "
                   />Tailwind</li>
                </ul>
            </div>
            <div className='ml-16 border-transparent rounded-2xl bg-white px-8 py-6 shadow-lg'>
                <h3 className='text-l font-bold mb-4'><FontAwesomeIcon icon={faServer} className='text-black pr-2' />Backend Development</h3>
                <ul className='text-start'>
                  <li><FontAwesomeIcon icon={faNode} className='text-blue-400 pr-2' />Node.js</li>
                  <li><FontAwesomeIcon icon={faSquareJs} className='text-blue-400 pr-2' />Javascript</li>
                  <li><FontAwesomeIcon icon={faPython} className='text-green-500 pr-2' />Python</li>
                  <li><FontAwesomeIcon icon={faJs} className='text-green-500 pr-2' />Express.js</li>
                  <li><FontAwesomeIcon icon={faLaravel} className='text-amber-600 pr-2' />Laravel</li>
                  <li><FontAwesomeIcon icon={faPhp} className='text-sky-400 pr-2' />PHP</li>
                </ul>
            </div>
            <div className='ml-16 border-transparent rounded-2xl bg-white px-8 py-6 shadow-lg'>
                <h3 className='text-l font-semibold mb-4'><FontAwesomeIcon icon={faCloud} className='text-gray-600 pr-2' />Database & Cloud</h3>
                <ul className='text-start text-sm text-gray-600'>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>AWS</li>
                  <li>Firebase</li>
                  <li>PostgreSQL</li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default SkillsExpertise;