
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs, faNode, faCss3Alt, faReact } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  return (
    <div className="relative pr-14 w-96 h-96 md:w-[28rem] md:h-[28rem] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* React (Top Center) */}
          <FontAwesomeIcon
            icon={faReact}
            className="absolute pr-10 text-blue-400 text-2xl md:text-4xl top-9 left-1/2 transform -translate-x-1/2"
          />

          {/* Solidity (Top Left) */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg"
            alt="Solidity"
            className="absolute w-6 h-6 md:w-8 md:h-8 top-1/4 left-5"
          />

          {/* CSS3 (Bottom Left) */}
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="absolute text-blue-500 text-2xl md:text-4xl bottom-1/4 left-6"
          />

          {/* JavaScript (Bottom Center) */}
          <FontAwesomeIcon
            icon={faSquareJs}
            className="absolute text-yellow-500 text-2xl md:text-4xl bottom-6 left-1/2 transform -translate-x-1/2"
          />

          {/* Node.js (Bottom Right) */}
          <FontAwesomeIcon
            icon={faNode}
            className="absolute text-green-500 text-2xl md:text-4xl bottom-1/4 right-15"
          />

          {/* Ethers.js (Top Right) */}
          <img
            src="https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png"
            alt="Ethers.js"
            className="absolute bg-gray-200 w-6 h-6 md:w-8 md:h-8 top-1/4 right-16"
          />

          {/* Tailwind CSS (Center Left) */}
          <img
            src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
            alt="Tailwind CSS"
            className="absolute w-6 h-6 md:w-8 md:h-8 bg-white rounded-full top-1/2 left-0 transform -translate-y-1/2"
          />
        </div>
      </div>

      {/* === Profile Image === */}
      <img
        src="Kemboi.png"
        alt="Felix Profile"
        className="relative z-10 w-60 h-60 rounded-full border-4 border-purple-500 object-cover shadow-lg"
      />
    </div>
  );
}

export default Profile;
