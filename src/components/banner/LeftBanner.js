import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.","WordPress Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hi, WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
            I'm <span className="text-designColor capitalize whitespace-nowrap">Rafia Moazum</span>
          </h1>




        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#27DEBF"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Software Engineer and a dedicated Full Stack and WordPress Developer specializing in creating dynamic 
        websites and robust applications. My goal? To transform your ideas into digital realities that are not 
        only visually appealing but also seamlessly functional.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner