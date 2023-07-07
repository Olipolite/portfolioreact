import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="flex bg-gray-950 justify-center">
      <div className="text-white text-xs flex flex-row">
        <FontAwesomeIcon icon={faHippo} />
        <p className="px-10">Copyright © Olipolite 2023, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
