/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

function Card(props) {
  return (
    <div className="container flex bg-asphalt rounded-md overflow-hidden  m-2 p-2">
      <a href={props.link}>
        <div className="">
          <div className="flex justify-start">
            <h2 className="text-lg text-white">{props.title}</h2>
          </div>
          <p className="ml-2 mr-4 my-5 text-xs text-gray-300">{props.description}</p>
          <div>
            <span className="text-xs">{props.tech}</span>
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
};
