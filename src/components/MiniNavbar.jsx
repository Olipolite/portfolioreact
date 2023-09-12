import React from 'react';
import { Link } from 'react-scroll';

function MiniNavbar() {
  const routes = [
    // eslint-disable-next-line object-curly-newline
    { id: 0, path: '/', title: 'home', offset: -150 },
    { id: 1, path: 'about', title: 'about' },
    { id: 2, path: 'project', title: 'projects' },
    { id: 3, path: 'contact', title: 'contact' },
  ];

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex items-baseline space-x-4">
        {routes.map((route) => (
          <Link
            key={route.id}
            className="rounded-md cursor-pointer font-medium text-md relative group"
            to={route.path}
            smooth
            duration={500}
            offset={route.offset}
          >
            {route.title}
            <span className="absolute left-0 right-0 w-0 h-1 bg-bittersweet bottom-0 group-hover:w-full transition-all duration-300 ease-in-out group-hover:animate-underline-grow" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MiniNavbar;
