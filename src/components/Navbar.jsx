import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-black text-orange-500 flex justify-between items-center gap-2 px-20">
      <Link to="/" className="text-3xl py-3">奥</Link>
      <ul className="flex p-0 m-0 list-none">
        <li className="px-4">
          <Link to="/" className="hover:bg-orange-200">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/project">Project</Link>
        </li>
        <li className="px-4">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
