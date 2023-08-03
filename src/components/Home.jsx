import React from 'react';
import Oliver from '../images/ostrontransparentless.png';

function Home() {
  return (
    <div className="container mx-auto flex-grow min-h-screen pt-20">
      <div id="/" className="flex flex-col justify-center lg:flex-row lg:items-center sm:px-4 ">
        <div className="text-center sm:text-left sm:mx-5">
          <h2 className="text-sm font-bold text-cactus">{'HELLO THERE STRANGER,'}</h2>
          <h1 className="text-4xl font-bold text-white pb-4">{"I'M OLIVER"}</h1>
          <p className="text-sm text-gray-300 px-1 md:px-0">
            {'A Swedish, Leeds based Software Developer who loves anything that has to do with computers and drinks way too much pepsi max.'}
          </p>
        </div>
        <img src={Oliver} className="h-auto w-80 pt-20 lg:pr-0 sm:pt-28 sm:w-80 mx-auto sm:mx-5" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
