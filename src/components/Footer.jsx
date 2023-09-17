import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MiniNavbar from './MiniNavbar';

function Footer() {
  return (
    <div className="h-[10rem] flex flex-col justify-center items-center mt-10">
      <div className="container mx-auto flex justify-center text-white">
        <a href="https://github.com/Olipolite">
          <FontAwesomeIcon className="mx-4 sm:mx-2" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/oliveroquist/">
          <FontAwesomeIcon className="mx-4 sm:mx-2" icon={faLinkedin} />
        </a>
        <Link
          className="text-white cursor-pointer duration-300 hover:text-cactus"
          to="/"
          smooth
          duration={500}
          offset={-150}
        >
          <FontAwesomeIcon className="mx-4 sm:mx-2 mt-[3px]" icon={faHippo} />
        </Link>
      </div>
      <div className="flex justify-center items-center text-white text-xs mt-5 sm:mt-2">
        <MiniNavbar />
      </div>
      <div className="flex justify-center items-center text-white text-xs mt-5 sm:mt-2">
        <p className="px-2">© 2023 • Oliver Öquist</p>
      </div>
    </div>
  );
}

export default Footer;
