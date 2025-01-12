import React from "react";
import ProjectCard from "./ProjectCard";
import roomhunt from "../img/roomhunt.png";
import chromeExt from "../img/chromeExtension.png";
import doctemplate from "../img/doctemplater.png";
import modeo from "../img/modeo.png";
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
        <Lottie options={defaultOptions} height={200} width={200} />
        <span className="flex w-full my-auto flex-col ">
          <p className="text-zinc-100 font-[900] text-xl">Projects</p>
          <span className="h-[0.2rem] w-full bg-gradient-to-l from-transparent to-white opacity-90 "></span>
        </span>
      </span>

      {/* list of project */}
      <span className="flex flex-wrap flex-row mt-10 justify-center gap-16 ">
        <ProjectCard
          image={githubApi}
          title={"NextJS App"}
          link={"https://cortuna-repo-list.vercel.app/"}
          git={"https://github.com/AllenCortuna/Next-JS"}
          desc={
            "Next JS Application that integrates Github API to fetch list of public repository and its information. Dark mode toggle is included and showcase different Next JS features like suspense boundary and caching data."
          }
        />

        <ProjectCard
          image={roomhunt}
          title={"Roomhunt"}
          git={"https://github.com/AllenCortuna/roomhunt-client"}
          desc={
            "Roomhunt is a Progressive Web Application build using MERN(MongoDb, ExpressJS, React JS, and Node) this project provides feature for Room Seekers and Accommodators like updating available rooms, sending feedback and allows sending and recieving message."
          }
        />

        <ProjectCard
          image={doctemplate}
          title={"Document Templater"}
          link={"https://dpwh-modeo-webapp.vercel.app/"}
          git={"https://github.com/AllenCortuna/doctemplater"}
          desc={
            "Document Templater is a Next.js application that leverages doctemplater to populate a Microsoft Word document template with data from a form input, some part of the application directly write the data into a pdf document and it directly downloaded."
          }
        />

        <ProjectCard
          image={chromeExt}
          title={"Chrome Extension"}
          link={""}
          git={"https://github.com/AllenCortuna/DPWH-extension"}
          desc={
            "Chrome extension automatically populates input fields based on the submitted document filename. It was developed to streamline workflow by minimizing repetitive typing and decreasing the likelihood of typographical errors."
          }
        />
        <ProjectCard
          image={modeo}
          title={"Project Information System"}
          link={""}
          git={"https://github.com/AllenCortuna/modeo"}
          desc={
            "Web application  designed for the DPWH, use for managing public works contracts. The application allows users to create, search, and manage contract information, including details like project names, contract IDs, bidding dates, and other critical project metadata, this meta data is then linked into QR Code attached to the file folder."
          }
        />


      </span>
    </div>
  );
};

export default Project;
