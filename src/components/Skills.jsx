import React from "react";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import html5 from "../assets/html5.png";
import firebase from "../assets/firebasec.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="javascript logo"
            />
            <p>javaScript</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react logo" />
            <p>Reactjs</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="python logo" />
            <p>Python</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css logo" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html5} alt="html5 logo" />
            <p>HTML5</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="github logo" />
            <p>Github</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={git} alt="git logo" />
            <p>Git</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={firebase} alt="firebase logo" />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
