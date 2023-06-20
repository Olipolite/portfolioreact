import React from 'react';
import Oliver from '../ostrontwitchtransparentcopy.png';

function Home() {
  return (
    <div className="container flex-col justify-center items-center mx-auto">
      <div className="lg: pl-4 md:flex items-center md:px-32 xl:px-64">
        <div className="">
          <h1 className="text-5xl font-bold text-white py-8">{"Yoo, I'm Oliver!!"}</h1>
          <p className="text-white xl:text-xl lg:w-3/4 md:w-full sm:w-2/3">
            {"I'm a software developer who loves creating stuff and solve things. If I'm not coding i'm propably outside playing volleyball/tennis or beating someone up in Street Fighter."}
          </p>
        </div>
        <img src={Oliver} className="w-80 h-auto pt-10 sm:pt-28 sm:w-64 mx-auto sm:mx-5" alt="Pic of me" />
      </div>
    </div>
  );
}

export default Home;
