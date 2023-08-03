/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

function Card(props) {
  return (
    <div className="container bg-asphalt rounded-md overflow-hidden mx-0 p-0">
      <a href={props.link}>
        <div className="my-5 py-5">
          <div className="mx-8">
            <h2 className="text-xl text-white">{props.title}</h2>
          </div>
          <p className="mx-4 text-xs text-gray-300">{props.description}</p>
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
};
