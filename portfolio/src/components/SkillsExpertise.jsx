
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import TechnicalSkills from './TechnicalSkills';

function SkillsExpertise() {
  return (
    <div className="p-4 sm:p-8 bg-gray-100 text-gray-800 text-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold pb-4">
          Skills & <span className="text-purple-500">Expertise</span>
        </h2>
        <p className="text-gray-600 font-semibold mb-8 text-sm sm:text-base max-w-xl mx-auto">
          Technical competencies and professional skills I've gained through experience.
        </p>
      </div>

      <div className="font-semibold text-gray-700 text-sm sm:text-lg border-transparent rounded-4xl bg-white px-4 shadow-2xl py-3 mb-8 w-full sm:min-w-[300px] sm:max-w-[600px] mx-auto">
        <ul className="flex sm:flex-row items-center sm:justify-center sm:space-x-20 space-x-8 sm:space-y-0">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCode} className="px-1.5 text-md" /> Technical
          </li>
          <li className="flex items-center">
          <FontAwesomeIcon icon={faEthereum} className="px-1.5 text-sky-400 text-lg" /> Web 3
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faTools} className="px-1.5 text-md" /> Tools
          </li>
        </ul>
      </div>

      <TechnicalSkills />
    </div>
  );
}

export default SkillsExpertise;
