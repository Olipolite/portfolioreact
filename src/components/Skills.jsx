import React from 'react';
import js from '../images/js.png';
import react from '../images/react.png';
import html from '../images/html-5.png';
import css from '../images/css-3.png';
import docker from '../images/docker.png';
import postman from '../images/postman.png';
import jest from '../images/jest.png';
import git from '../images/git.png';
import postgre from '../images/postgre.png';
import express from '../images/express.png';
import axios from '../images/Axios.png';

function Skills() {
  const frontendSkills = [
    { name: 'Javascript', icon: js },
    { name: 'React', icon: react },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
  ];

  const backendSkills = [
    { name: 'PostgreSQL', icon: postgre },
    { name: 'Axios', icon: axios },
    { name: 'Express', icon: express },
  ];

  const tools = [
    { name: 'Docker', icon: docker },
    { name: 'Jest', icon: jest },
    { name: 'Git', icon: git },
    { name: 'Postman', icon: postman },
  ];

  return (
    <div id="skills" className="container mx-auto flex flex-col items-center h-[30rem] mt-20 md:mt-0">
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
        <div className="space-y-4">
          <h3 className="text-white">2. Backend</h3>
          <ul className="text-white text-[12px] space-y-4">
            {backendSkills.map((skills) => (
              <li className="flex items-center space-x-2">
                <img className="h-8 w-8" src={skills.icon} alt="html icon" />
                <p className="border-b border-cactus border-spacing-0">{skills.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white flex justify-center">3. Tools</h3>
          <ul className="text-white text-[12px] space-y-4">
            {tools.map((skills) => (
              <li className="flex items-center space-x-2">
                <img className="h-8 w-8" src={skills.icon} alt="html icon" />
                <p className="border-b border-cactus border-spacing-0">{skills.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
