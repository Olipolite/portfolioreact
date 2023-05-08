import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul className="flex flex-row justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
        <li>
          <Link to="/contactme">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
