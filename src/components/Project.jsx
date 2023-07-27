/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card';
import { cardData } from '../data';
import test from '../images/test.png';

function Project() {
  const images = [test];

  return (
    <div className="min-h-screen">
      <div id="project" className="flex justify-center text-3xl text-cactus">Project</div>
      <div className="container flex flex-col justify-center items-center mx-auto text-gray-300">
        {cardData.map((card) => (
          <div className="border m-4">
            <Card image={images} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
