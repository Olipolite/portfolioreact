/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

function Card(props) {
  return (
    <div className="container flex bg-asphalt rounded-md m-2 p-2">
      <a className="w-full" href={props.link}>
        <div className="">
          <div className="flex justify-start">
            <h2 className="text-md ml-2 mr-4 text-white">{props.title}</h2>
          </div>
          <p className="ml-2 mr-4 my-10 text-xs text-gray-300">{props.description}</p>
          <div className="text-xs ml-2 mr-2 pt-4 pb-2 border-t-[1px] block">
            <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech}</span>
            <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech1}</span>
            <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech2}</span>
            <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech3}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  link: Proptypes.string.isRequired,
  tech: Proptypes.string.isRequired,
  tech1: Proptypes.string.isRequired,
  tech2: Proptypes.string.isRequired,
  tech3: Proptypes.string.isRequired,
};
