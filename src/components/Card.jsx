/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

function Card(props) {
  return (
    <div className="container">
      <div>
        <div className="flex items-center justify-center">
          <img className="w-32 h-auto" src={props.image} alt="project" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
