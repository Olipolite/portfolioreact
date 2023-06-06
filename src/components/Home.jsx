import React from 'react';
import Oliver from '../nocactus.png';

function Home() {
  return (
    <div className="container flex-col justify-center items-center mx-auto grid grid-cols-6 px-4 sm:px-6 lg:px-8">
      <div className="md:col-span-1" />
      <div className="col-span-4 md:flex items-center">
        <div>
          <p className="text-left text-xl leading-9">
            Im a software developer who loves creating stuff and solve things
          </p>
        </div>
        <img src={Oliver} className="max-w-xs h-auto ml-4" alt="Pic of me" />
      </div>
      <div className="md:col-span-1" />
    </div>
  );
}

export default Home;
