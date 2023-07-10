import React from 'react';
import Oli from '../IMG_3544.JPG';

function About() {
  return (
    <div id="about" className="container flex-col justify-center items-center mx-auto flex-grow min-h-screen pt-20">
      <div className=" text-center sm:text-left sm:px-4 lg:flex justify-center md:px-32 lg:px-40 xl:px-64">
        <img src={Oli} alt="oliver" className="w-72 h-auto lg:h-[550px] lg:w-[800px] pr-5 overflow-visible" />
        <article className="pl-5">
          <p className="text-cactus text-[12px] pt-10 lg:pt-0">WHO IS THIS GUY?</p>
          <h3 className="text-3xl text-white pb-4">OLIVER ÖQUIST</h3>
          <div>
            <p className="text-gray-300 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Non velit nesciunt molestiae voluptates, iure cupiditate,
              molestias doloremque vel consequuntur
              accusantium veritatis sint. Iure, nobis alias.
              {'\n'}
              {'\n'}
              Vad vill du mig?
              {'\n'}
              {'\n'}
              perferendis quas fuga quia expedita qui.
              Mollitia, voluptatum perferendis.
              Doloribus, libero illo veritatis nemo beatae necessitatibus.
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum dolores, commodi nobis vero necessitatibus
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum dolores, commodi nobis vero necessitatibus
              perferendis quas fuga quia expedita qui.
              Mollitia, voluptatum perferendis.
              Doloribus, libero illo veritatis nemo beatae necessitatibus.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
