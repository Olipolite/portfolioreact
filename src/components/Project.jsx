/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Card from './Card';
import { cardData } from '../data';
import acid from '../images/acidrain.png';
import controller from '../images/controller.png';
import astronaut from '../images/astronaut.png';
import phonograph from '../images/phonograph.png';

function Project() {
  const images = [acid, controller, astronaut, phonograph];

  return (
    <div className="min-h-screen pt-32">
      <div id="project" className="flex flex-col items-center justify-center text-[12px] text-cactus ">
        SOME FUN STUFF HERE
        <p className="text-3xl text-white">
          PROJECTS
        </p>
      </div>
      <div className="container flex flex-col justify-center items-center gap-10 mx-auto text-gray-300">
        {cardData.map((card, index) => (
          <div className="rounded-xl m-4">
            <Card image={images[index]} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
