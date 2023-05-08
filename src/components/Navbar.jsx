import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-screen h-20 bg-gray">
      <ul className="flex">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/projects">My Projects</Link>
        </li>
        <li className="mx-4">
          <Link to="/contactme">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
