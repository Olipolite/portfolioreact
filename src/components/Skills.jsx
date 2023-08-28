import React from 'react';
import js from '../images/js.png';
import react from '../images/react.png';
import html from '../images/html-5.png';
import css from '../images/css-3.png';

function Skills() {
  const frontendSkills = [
    { name: 'Javascript', icon: js },
    { name: 'React', icon: react },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center h-[30rem]">
      <h2 className="text-cactus text-[12px]">{"SOME THINGS I'VE LEARNT"}</h2>
      <p className="text-white text-3xl">
        {'SKILLS'}
      </p>
      <div className="grid grid-cols-3 gap-8 md:gap-24 mt-8">
        <div className="space-y-4">
          <h3 className="text-white flex justify-center">1. Frontend</h3>
          <ul className="text-white text-[12px] space-y-4">
            {frontendSkills.map((skills) => (
              <li className="flex items-center space-x-2">
                <img className="h-8 w-8" src={skills.icon} alt="html icon" />
                <p className="border-b border-cactus border-spacing-0">{skills.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green">
          <h3 className="text-white">2. Backend</h3>
          <ul className="text-white text-[12px] space-y-4">
            <li>PostgreSQL</li>
            <li>Axios</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="bg-green">
          <h3 className="text-white">3. Tools</h3>
          <ul className="text-white text-[12px] space-y-4">
            <li>Docker</li>
            <li>Jest</li>
            <li>GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
