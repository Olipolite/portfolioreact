import React from 'react';

function Skills() {
  return (
    <div className="container mx-auto flex flex-col items-center h-[30rem]">
      <h2 className="text-cactus text-[12px]">{"SOME THINGS I'VE LEARNT"}</h2>
      <p className="text-white text-3xl">
        {'SKILLS'}
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-green">
          <h3 className="text-white">1. Language</h3>
          <ul className="text-white">
            <li>-Javascript</li>
            <li>-PostgreSQL</li>
          </ul>
        </div>
        <div className="bg-green">
          <h3 className="text-white">2. Frameworks</h3>
          <ul className="text-white">
            <li>-React.js</li>
            <li>-Express</li>
          </ul>
        </div>
        <div className="bg-green">
          <h3 className="text-white">3. Tools</h3>
          <ul className="text-white">
            <li>-Docker</li>
            <li>-Jest</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
