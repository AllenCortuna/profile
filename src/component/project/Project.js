import React from "react";
import ProjectCard from "./ProjectCard";
import roomhunt from "../img/roomhunt.png";
import webpos from "../img/webpos.png";
// import useHint from "./state/hint";

const Project = () => {
  return (
    <div className="pt-28 pb-20 w-full h-full flex flex-col">
      <span className="flex flex-row gap-1  content-center justify-center w-auto md:mx-[8%]">
        <span className="h-[0.2rem] w-[5rem] mt-[1.2rem] bg-gradient-to-r from-transparent to-white opacity-90"></span>

        <p className="text-zinc-100 font-[900] text-[1.2rem]">Projects</p>
        <span className="h-[0.2rem] w-full mt-[1.2rem] bg-gradient-to-l from-transparent to-white opacity-90"></span>
      </span>

      {/* list of project */}
      <span className="flex flex-wrap flex-row mt-20 justify-center gap-16">
        <ProjectCard image={roomhunt} title={"Roomhunt"} desc={"Roomhunt is a Progressive Web Application build using MERN(MongoDb, ExpressJS, React JS, and Node) this project provides feature for Room Seekers and Accommodators like updating available rooms, sending feedback and allows sending and recieving message. "}/>
        <ProjectCard image={webpos} title={"Web Based Pos"} />
      </span>
    </div>
  );
};

export default Project;
