import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center gap-2 px-20">
      <Link to="/" className="text-3xl py-7">奥</Link>
      <ul className="flex p-0 m-0 list-none text-[22px]">
        <li className="px-4">
          <Link to="/about" className="hover:bg-orange-200">About</Link>
        </li>
        <li className="px-4">
          <Link to="/project">Project</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">GitHub</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
