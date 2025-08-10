
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faServer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faSquareJs, faNode, faCss3Alt, faReact, faPython, faJs } from '@fortawesome/free-brands-svg-icons';

function TechnicalSkills() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-6 p-4">

      {/* Frontend Development */}
      <div className="w-full sm:w-[90%] md:w-[30%] rounded-2xl bg-white px-6 py-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faLaptop} className="text-sky-500 pr-2" /> 
          Frontend Development
        </h3>
        <ul className="text-start font-semibold space-y-3">
          {[
            { icon: faSquareJs, color: "text-amber-400", name: "JavaScript", percent: 90, bar: "bg-yellow-400" },
            { icon: faReact, color: "text-blue-400", name: "React.js", percent: 85, bar: "bg-blue-400" },
            { icon: faCss3Alt, color: "text-blue-400", name: "CSS3", percent: 80, bar: "bg-blue-400" },
            { icon: faHtml5, color: "text-orange-400", name: "HTML5", percent: 95, bar: "bg-orange-400" },
            { icon: faPython, color: "text-green-500", name: "Python", percent: 75, bar: "bg-green-500" },
          ].map((skill, index) => (
            <li key={index}>
              <div className="flex justify-between text-sm items-center">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={skill.icon} className={`${skill.color} pr-2`} />
                  {skill.name}
                </div>
                <span className="text-gray-600">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${skill.bar} h-2 rounded-full`} style={{ width: `${skill.percent}%` }}></div>
              </div>
            </li>
          ))}
          <li>
            <div className="flex justify-between text-sm items-center">
              <div className="flex items-center">
                <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-4 h-4 mr-2" />
                Tailwind
              </div>
              <span className="text-gray-600">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-teal-400 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </li>
        </ul>
      </div>

      {/* Backend Development */}
      <div className="w-full sm:w-[90%] md:w-[30%] rounded-2xl bg-white px-6 py-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faServer} className="text-black pr-2" /> 
          Backend Development
        </h3>
        <ul className="text-start font-semibold space-y-3">
          {[
            { icon: faNode, color: "text-blue-400", name: "Node.js", percent: 85, bar: "bg-blue-400" },
            { icon: faSquareJs, color: "text-blue-400", name: "JavaScript", percent: 80, bar: "bg-blue-400" },
            { icon: faPython, color: "text-green-500", name: "Python", percent: 75, bar: "bg-green-500" },
            { icon: faJs, color: "text-green-500", name: "Express.js", percent: 70, bar: "bg-green-500" },
          ].map((skill, index) => (
            <li key={index}>
              <div className="flex justify-between text-sm items-center">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={skill.icon} className={`${skill.color} pr-2`} />
                  {skill.name}
                </div>
                <span className="text-gray-600">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${skill.bar} h-2 rounded-full`} style={{ width: `${skill.percent}%` }}></div>
              </div>
            </li>
          ))}
          <li>
            <div className="flex justify-between text-sm items-center">
              <div className="flex items-center">
                <img src="https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png" alt="Ethers.js" className="w-4 h-4 mr-2" />
                Ethers.js
              </div>
              <span className="text-gray-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between text-sm items-center">
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" alt="Solidity" className="w-4 h-4 mr-2" />
                Solidity
              </div>
              <span className="text-gray-600">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-black h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </li>
        </ul>
      </div>

      {/* Database & Cloud */}
      <div className="w-full sm:w-[90%] md:w-[30%] rounded-2xl bg-white px-6 py-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCloud} className="text-gray-600 pr-2" /> 
          Database & Cloud
        </h3>
        <ul className="text-start text-sm text-gray-600 font-semibold space-y-4">
          {[
            { name: "MongoDB", percent: 80, bar: "bg-green-600" },
            { name: "MySQL", percent: 85, bar: "bg-blue-500" },
            { name: "AWS", percent: 70, bar: "bg-yellow-500" },
            { name: "Firebase", percent: 75, bar: "bg-amber-500" },
            { name: "PostgreSQL", percent: 65, bar: "bg-indigo-500" },
          ].map((skill, index) => (
            <li key={index}>
              <div className="flex justify-between text-xs items-center">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${skill.bar} h-2 rounded-full`} style={{ width: `${skill.percent}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default TechnicalSkills;
