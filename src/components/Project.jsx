/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card';
import { cardData } from '../data';

function Project() {
  return (
    <div className="container min-h-screen pt-32 mx-auto px-4 sm:px-4 lg:px-20">
      <div id="project" className="flex flex-col items-center justify-center text-sm text-cactus">
        SOME FUN STUFF HERE
        <p className="text-3xl text-white">
          PROJECTS
        </p>
      </div>
      <div className="grid gap-4 justify-center items-center pt-5 md:grid-cols-2 lg:grid-cols-2 text-gray-300">
        {cardData.map((card, index) => (
          <div key={index} className="flex items-center justify-center rounded-xl">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
