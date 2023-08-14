import React, { useState } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
  const routes = [
    {
      id: 0,
      path: '/',
      title: 'Home',
    },
    {
      id: 1,
      path: 'about',
      title: 'About',
    },
    {
      id: 2,
      path: 'project',
      title: 'Projects',
    },
    {
      id: 3,
      path: 'contact',
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
      <div className="container mx-auto px-10">
        <div className="" />
        <div className="flex items-center justify-between h-16">
          <Link
            className="flex text-white text-xl cursor-pointer duration-300 hover:text-cactus"
            key={routes.id}
            to={routes[0].path}
            smooth
            duration={500}
            offset={-150}
          >
            <FontAwesomeIcon icon={faHippo} />
          </Link>
          {/* nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.id}
                  className="rounded-md cursor-pointer font-medium text-md relative group"
                  to={route.path}
                  smooth
                  duration={500}
                >
                  {route.title}
                  <span className="absolute left-0 right-0 w-0 h-1 bg-bittersweet bottom-0 group-hover:w-full transition-all duration-300 ease-in-out group-hover:animate-underline-grow" />
                </Link>
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
          {open && (
            <div className="lg:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="flex flex-col space-y-4">
                {routes.map((route) => (
                  <button
                    type="button"
                    key={route.path}
                    onClick={() => {
                      closeMenu();
                      const element = document.getElementById(route.path);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 flex px-3 py-2 rounded-md text-base font-medium"
                  >
                    {route.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
