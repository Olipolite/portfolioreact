import React from 'react';
import Oliver from '../nocactus.png';

function Home() {
  return (
    <div className="border mx-auto max-w-xl">
      <h1 className="flex flex-wrap justify-center pb-4 text-6xl font-extrabold leading-none tracking-tight
       text-gray-900 dark:text-white"
      >
        Hi, Im Oliver!

      </h1>
      <div className="">
        <p className="text-left text-2xl leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img src={Oliver} className="max-w-full" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
