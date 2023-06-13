import React from 'react';
import Oliver from '../nocactus.png';

function Home() {
  return (
    <div className="container flex-col justify-center items-center mx-auto">
      <div className="grid-cols-5 gap-10 lg:gap-20 pl-4 md:flex items-center md:px-32 xl:px-64">
        <div className="col-span-4">
          <h1 className="text-5xl font-bold text-white py-8">{"Yoo, I'm Oliver!!"}</h1>
          <p className="text-white w-full xl:text-xl lg:w-full">
            {"I'm a software developer who loves creating stuff and solve things. If I'm not coding i'm propably outside playing volleyball/tennis or beating someone up in Street Fighter."}
          </p>
        </div>
        <img src={Oliver} className="w-64 h-auto col-span-1 sm:pt-28" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
