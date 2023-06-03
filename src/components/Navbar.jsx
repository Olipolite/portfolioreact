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

  return (
    <div className="bg-black text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-white" to="/">奧</Link>
          </div>
          {/* nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes.map((path) => (
                <Link className="px-3 py-2 rounded-md font-medium text-md" to={path.path}>{path.title}</Link>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md
           text-gray-400"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <FaTimes onClick={handleMenu} />
              ) : (
                <FaHamburger onClick={handleMenu} />
              )}
            </button>
          </div>
          {/* mobile-menu */}
          {open ? (
            <div className="md:hidden fixed inset-0 flex items-center justify-center">
              <div className="bg-black w-full h-full">
                {routes.map((path) => (
                  <Link className="text-gray-300 flex px-3 py-2 rounded-md text-base font-medium" to={path.path}>{path.title}</Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
