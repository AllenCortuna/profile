import React from "react";
import PersonalInfo  from './PersonalInfo'
import Skills from "./Skill";

const Home = () => {
  
  return (
    <div className="p-4">
      <div className=" mt-10 grid grid-cols-1 gap-y-10 justify-items-center">
        <PersonalInfo/>
        <Skills/>
      </div>
    </div>
  );
};

export default Home;
