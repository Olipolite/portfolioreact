import React from 'react';
import Oliver from '../ostrontransparentless.png';

function Home() {
  return (
    <div className="container flex-col justify-center items-center mx-auto flex-grow min-h-screen pt-20">
      <div className="sm:px-4 lg:flex items-center md:px-32 lg:px-40 xl:px-64">
        <div className="sm:mx-5">
          <h2 className="text-md font-bold text-cactus">{'HELLO THERE STRANGER,'}</h2>
          <h1 className="text-5xl font-bold text-white pb-4">{"I'M OLIVER"}</h1>
          <p className="text-gray-300 lg:w-full md:w-full sm:w-2/3">
            {'A Swedish, Leeds based Software Developer who loves anything that has to do with computers and drinks way too much pepsi max.'}
          </p>
        </div>
        <img src={Oliver} className="h-auto w-80 pt-20 lg:pr-0 sm:pt-28 sm:w-80 mx-auto sm:mx-5" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
