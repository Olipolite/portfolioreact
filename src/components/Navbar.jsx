import React, { useState } from 'react';
// import { BsGithub } from 'react-icons/bs';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const routes = [
    {
      path: '/',
      title: 'Home',
    }, {
      path: '/about',
      title: 'About',
    }, {
      path: '/project',
      title: 'Project',
    }, {
      path: '/contact',
      title: 'Contact',
    },
  ];

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="bg-svart text-white">
      <div className="container mx-auto px-10 md:px-32 xl:px-64">
        <div className="" />
        <div className="flex items-center justify-between h-16">
          <Link className="flex text-white text-xl hover:text-cactus" to="/">奧 Oliver Öquist</Link>
          {/* nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes.map((path) => (
                <Link className="rounded-md font-medium text-md hover:underline decoration-8 decoration-cactus" key={path.path} to={path.path}>{path.title}</Link>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="m-4 md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="flex items-center justify-center w-8 h-8"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <FaTimes className="pointer-events-none z-10" onClick={handleMenu} />
              ) : (
                <FaHamburger className="pointer-events-none text-3xl" onClick={handleMenu} />
              )}
            </button>
          </div>
          {/* mobile-menu */}
          {open ? (
            <div className="md:hidden fixed inset-0 flex items-center justify-center bg-svart bg-opacity-50">
              <div className>
                {routes.map((path) => (
                  <Link onClick={closeMenu} className="text-gray-300 flex px-3 py-2 rounded-md text-base font-medium" key={path.path} to={path.path}>{path.title}</Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="" />
      </div>
    </div>
  );
}

export default Navbar;
