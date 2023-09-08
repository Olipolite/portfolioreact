/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="container flex bg-asphalt rounded-md m-2 p-2 hover:scale-105 duration-300 transition-transform">
      <a className="w-full " href={props.link}>
        <div className="flex justify-start">
          <h2 className="text-md ml-2 mr-4 text-white">{props.title}</h2>
        </div>
        <p className="ml-2 mr-4 my-10 text-xs text-gray-300">{props.description}</p>
        <div className="text-xs ml-2 mr-2 pt-4 pb-2">
          <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech}</span>
          <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech1}</span>
          <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech2}</span>
          {props.tech3 && <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech3}</span>}
          {props.tech4 && <span className="border border-cactus mr-3 text-cactus px-[3px]">{props.tech4}</span>}
        </div>
      </a>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  tech1: PropTypes.string.isRequired,
  tech2: PropTypes.string.isRequired,
  tech3: PropTypes.string,
  tech4: PropTypes.string,
};

Card.defaultProps = {
  tech3: '',
  tech4: '',
};
