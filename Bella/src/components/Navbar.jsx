import React from 'react';

function Navbar() {
  return (
    <nav className="bg-grey-800 p-2 flex justify-between items-center">
      <div className="text-black text-lg font-bold">
        My Website
      </div>
      <ul className="flex space-x-4">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;