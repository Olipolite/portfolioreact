import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="h-[10rem] flex-row justify-center items-center bg-gray-950 pt-2">
      <div className="flex justify-center text-white">
        <a href="https://github.com/Olipolite">
          <FontAwesomeIcon className="mr-4" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/oliveroquist/">
          <FontAwesomeIcon className="mr-4" icon={faLinkedin} />
        </a>
        <FontAwesomeIcon className="mr-4 mt-[3px]" icon={faHippo} />
      </div>
      <div className="flex justify-center text-white text-xs mt-5">
        <FontAwesomeIcon icon={faHippo} />
        <p className="px-5">Copyright © Olipolite 2023, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
