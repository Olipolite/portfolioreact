import React from 'react';
import Oli from '../IMG_3544.JPG';

function About() {
  return (
    <div className="container flex-col justify-center items-center mx-auto flex-grow min-h-screen pt-20">
      <div className="sm:px-4 lg:flex justify-center md:px-32 lg:px-40 xl:px-64">
        <img src={Oli} alt="oliver" className="w-[40vh] h-auto pr-5" />
        <article className="pl-5">
          <p className="text-cactus text-[12px] pt-10 lg:pt-0">WHO IS THIS GUY?</p>
          <h3 className="text-3xl text-white pb-4">OLIVER ÖQUIST</h3>
          <div>
            <text className="text-gray-300">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit doloribus soluta quas ipsum, unde, ex nesciunt dolore
              fugiat expedita blanditiis beatae rem incidunt culpa saepe.
              Sunt soluta quo quas deleniti.
              {'\n'}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores reprehenderit quisquam adipisci aliquam libero minima facilis quaerat
              obcaecati nobis incidunt assumenda possimus excepturi culpa,
              itaque amet consectetur fuga expedita necessitatibus?

            </text>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
