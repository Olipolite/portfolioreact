/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card';
import { cardData } from '../data';

function Project() {
  return (
    <div className="container min-h-screen pt-32 mx-auto sm:px-4">
      <div id="project" className="flex flex-col items-center justify-center text-sm text-cactus">
        SOME FUN STUFF HERE
        <p className="text-3xl text-white">
          PROJECTS
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 lg:grid lg:grid-cols-2 mx-auto text-gray-300">
        {cardData.map((card) => (
          <div className="flex items-center justify-center rounded-xl m-4 w-64 h-50">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
