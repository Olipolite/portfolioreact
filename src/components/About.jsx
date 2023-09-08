import React from 'react';
import Oli from '../images/oliver.JPG';

function About() {
  return (
    <div id="about" className="container mx-auto flex-grow min-h-screen pt-5 sm:pt-20">
      <div className="flex flex-col items-center text-center sm:text-left sm:px-4 lg:flex-row lg:items-start">
        <img src={Oli} alt="oliver" className="w-72 h-auto lg:h-[400px] lg:w-[620px] rounded-lg" />
        <article className="px-5">
          <p className="text-cactus text-[12px] pt-10 lg:pt-0">WHO IS THIS GUY?</p>
          <h2 className="text-3xl text-white pb-4">OLIVER ÖQUIST</h2>
          <div>
            <p className="text-sm lg:pr-5 text-left text-gray-300 whitespace-pre-line">
              Yoo 👋
              {'\n'}
              I started my Software Development Journey in the beginning of 2022.
              I was on youtube looking up coding tutorials for Python.
              I did the Programming with Mosh
              Python tutorial and was instantly hooked. After making my own very small scripts that
              make my life easier such as
              organizing invoices or my own wage for the month.
              I decided I wanted to take my hobby to the next level, bootcamp.
              {'\n'}
              {'\n'}
              September 2022 I enrolled in CommandShift intensive 6-month Fullstack-Software
              Development bootcamp.
              {'\n'}
              {'\n'}
              perferendis quas fuga quia expedita qui.
              Mollitia, voluptatum perferendis.
              Doloribus, libero illo veritatis nemo beatae necessitatibus.
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum dolores, commodi nobis vero necessitatibus
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
