/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

function Card(props) {
  return (
    <div className="container border-2 rounded-xl overflow-hidden border-gray-40 mx-0 p-0">
      <a className="inline-block" href={props.link}>
        <div className="my-10 py-10">
          <div className="flex items-center mx-8">
            <img className="w-14 h-auto mx-5" src={props.image} alt="project" />
            <h2 className="text-xl text-white">{props.title}</h2>
          </div>
          <p className="mx-14 text-gray-300">{props.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;

Card.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  link: Proptypes.string.isRequired,
};
