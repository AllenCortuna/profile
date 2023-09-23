import Motion from "./motion/Motion";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript,TbBrandLaravel, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine} from "react-icons/ri";
import { DiMongodb} from "react-icons/di";
import {
 SiSass,
 SiTailwindcss,
 SiPython,
 SiLaragon,
} from "react-icons/si";

const Skills = () => {
 return (
  <div
   className="grid grid-cols-2 md:grid-cols-4 justify-center content-start flex-col gap-14 gap-y-20 p-2 mt-28 pt-20 overflow-hidden"
   id="f-skill"
  >
   <Motion
    text={"Javascript"}
    isLeft={true}
    color={"hover:border-amber-300 hover:text-amber-300"}
    image={<TbBrandJavascript />}
   />
   
   <Motion
    text={"React JS"}
    isLeft={false}
    color={"hover:border-blue-300 hover:text-blue-300"}
    image={<RiReactjsLine />}
   />

   <Motion
    text={"Css"}
    isLeft={true}
    color={"hover:border-sky-400 hover:text-sky-400"}
    image={<FaCss3Alt />}
   />

   <Motion
    text={"Python"}
    isLeft={false}
    color={"hover:border-amber-400 hover:text-amber-400"}
    image={<SiPython />}
   />

   <Motion
    text={"Laravel"}
    isLeft={true}
    color={"hover:border-red-500 hover:text-red-500"}
    image={< TbBrandLaravel/>}
   />

   <Motion
    text={"Git"}
    isLeft={false}
    color={"hover:border-red-400 hover:text-red-400"}
    image={<FaGitAlt />}
   />

   <Motion
    text={"Scss/Sass"}
    isLeft={true}
    color={"hover:border-red-300 hover:text-red-300"}
    image={<SiSass />}
   />

   <Motion
    text={"Tailwind"}
    isLeft={false}
    color={"hover:border-teal-400 hover:text-teal-400"}
    image={<SiTailwindcss />}
   />

   <Motion
    text={"PHP"}
    isLeft={true}
    color={"hover:border-violet-400 hover:text-violet-400"}
    image={<SiLaragon />}
   />
   
   <Motion
    text={"MongoDB"}
    isLeft={false}
    color={"hover:border-lime-500 hover:text-lime-500"}
    image={<DiMongodb />}
   />

   <Motion
    text={"NextJS"}
    isLeft={true}
    color={"hover:border-teal-400 hover:text-teal-400"}
    image={<TbBrandNextjs />}
   />
   
   <Motion
    text={"MySQL"}
    isLeft={false}
    color={"hover:border-blue-400 hover:text-blue-400"}
    image={<TbBrandMysql />}
   />
   

  </div>
 );
};

export default Skills;
