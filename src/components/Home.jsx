import React from 'react';
import Oliver from '../nocactus.png';

function Home() {
  return (
    <div className="px-52">
      <h1 className="flex flex-wrap justify-start mt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight
       text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Hi, Im Oliver!

      </h1>
      <div className="flex items-center">
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={Oliver} className="max-w-xl w-full h-auto" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
