import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div id="contact" className="container mx-auto h-[25rem] flex-grow flex flex-col items-center text-3xl mt-36">
      <h2 className="text-white">{'Interested in working together?'}</h2>
      <a href="mailto:oliveroquist3d@gmail.com">
        <button className="border-2 duration-300 hover:border-cactus rounded-md text-white text-[12px] px-2 py-1 my-10 hover:text-cactus " type="button">
          <FontAwesomeIcon className="mr-2 text-white" icon={faEnvelope} />
          Let's get in touch
        </button>
      </a>
    </div>
  );
}

export default Contact;
