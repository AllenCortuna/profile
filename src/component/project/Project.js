import React from "react";
import ProjectCard from "./ProjectCard";
import roomhunt from "../img/roomhunt.png";
import webpos from "../img/webpos.png";
import spaceman from "../img/spaceman.json";
import githubApi from "../img/githubApi.png";
import Lottie from "react-lottie";

const Project = () => {
  // lottie aninated svg
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceman,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-14 pb-20 w-full h-full flex flex-col">
      <span className="flex flex-row gap-1 justify-start w-auto md:mx-[10%] mx-[2%]">
        {/* <span className="h-[0.2rem] w-[5rem] mt-[1.2rem] bg-gradient-to-r from-transparent to-white opacity-90"></span> */}
        <Lottie options={defaultOptions} height={200} width={200} />
        <span className="flex w-full my-auto flex-col ">
          <p className="text-zinc-100 font-[900] text-xl">Projects</p>
          <span className="h-[0.2rem] w-full bg-gradient-to-l from-transparent to-white opacity-90 "></span>
        </span>
      </span>

      {/* list of project */}
      <span className="flex flex-wrap flex-row mt-10 justify-center gap-16 ">
        <ProjectCard
          image={roomhunt}
          title={"Roomhunt"}
          link={"https://roomhunt.vercel.app/"}
          git={"https://github.com/AllenCortuna/roomhunt-client"}
          desc={
            "Roomhunt is a Progressive Web Application build using MERN(MongoDb, ExpressJS, React JS, and Node) this project provides feature for Room Seekers and Accommodators like updating available rooms, sending feedback and allows sending and recieving message."
          }
        />

        <ProjectCard
          image={webpos}
          title={"Web Based Pos"}
          link={"https://document-tracker-five.vercel.app/"}
          git={"https://github.com/AllenCortuna/document-tracker"}
          desc={
            "A Point of Sale system using the MERN stack. Incorporates various npm libraries such as nodemailer for authentication, Chart.js for data visualization, and Zustand for state management. This system was created to monitor diverse inventory items and automate the calculation of daily, monthly, and quarterly expenses and income."
          }
        />

        <ProjectCard
          image={githubApi}
          title={"NextJS APP (Github API)"}
          link={"https://cortuna-repo-list.vercel.app/"}
          git={"https://github.com/AllenCortuna/document-tracker"}
          desc={
            "Next JS Application that integrates Github API to fetch list of public repository and its information. Dark mode toggle is included and showcase different Next JS features like suspense boundary and caching data."
          }
        />
      </span>
    </div>
  );
};

export default Project;
