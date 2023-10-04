import React from 'react';
import Oli from '../images/oliver.JPG';

function About() {
  return (
    <div id="about" className="container mx-auto flex-grow min-h-screen pt-5 sm:pt-20">
      <div className="flex flex-col items-center text-center md:text-left sm:px-4 lg:flex-row lg:items-start">
        <img src={Oli} alt="oliver" className="w-72 h-auto lg:h-[400px] lg:w-[620px] rounded-lg" />
        <article className="px-5 text-center">
          <p className="text-cactus text-[12px] pt-10 lg:pt-0">WHO IS THIS GUY?</p>
          <h2 className="text-3xl text-white pb-4">OLIVER ÖQUIST</h2>
          <div>
            <div className="text-sm lg:pr-5 text-left text-gray-300 whitespace-pre-line">
              Yoo 👋
              {'\n'}
              I started my Software Development journey in the beginning of 2022.
              I was on Youtube looking up coding tutorials for Python.
              I did the Programming with
              {' '}
              <a className="underline text-princeton" href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&ab_channel=ProgrammingwithMosh">Mosh</a>
              {' '}
              Python tutorial and was instantly hooked. After making my own very small scripts that
              make my life easier such as
              organizing invoices or my own wage for the month.
              I decided I wanted to take my hobby to the next level, bootcamp.
              {'\n'}
              {'\n'}
              September 2022 I enrolled in
              {' '}
              <a className="underline text-princeton" href="https://www.commandshift.co/courses/bootcamp/">command shift</a>
              {' '}
              intensive 6-month Fullstack-Software Development bootcamp.
              {'\n'}
              {'\n'}
              Now I'm enjoying my time learning new tech and further improving myself as a
              software developer. I can't wait to transtition from my current job as a
              3D Designer to Fulltime Software Developer.
              {'\n'}
              {'\n'}
              Feel free to reach out if you are interested in working together or just fancy a
              {' '}
              <a className="underline text-princeton" href="mailto:oliveroquist3d@gmail.com">chat.</a>
              {' '}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
