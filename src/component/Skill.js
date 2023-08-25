import Motion from "./motion/Motion";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
 SiSass,
 SiTailwindcss,
 SiPython,
 // SiCodio,
 SiMui,
 SiNotion
} from "react-icons/si";

const Skills = () => {
 return (
  <div
   className="grid grid-cols-1 md:grid-cols-2 justify-center content-start flex-col gap-20 p-4 mt-28 pt-20"
   id="f-skill"
  >
   <Motion
    text={"Javascript"}
    isLeft={true}
    color={"hover:border-amber-300 hover:text-amber-300"}
    image={<TbBrandJavascript />}
   />

   <Motion
    text={"Css"}
    isLeft={false}
    color={"hover:border-sky-400 hover:text-sky-400"}
    image={<FaCss3Alt />}
   />

   <Motion
    text={"Python"}
    isLeft={true}
    color={"hover:border-amber-400 hover:text-amber-400"}
    image={<SiPython />}
   />

   {/* <Motion */}
   {/*  text={"CProgramming"} */}
   {/*  isLeft={false} */}
   {/*  color={"hover:border-indigo-400 hover:text-indigo-400"} */}
   {/*  image={<SiCodio />} */}
   {/* /> */}
   
   <Motion
    text={"Notion"}
    isLeft={false}
    color={"hover:border-lime-100 hover:text-lime-100"}
    image={<SiNotion />}
   />

   <Motion
    text={"Git"}
    isLeft={true}
    color={"hover:border-red-400 hover:text-red-400"}
    image={<FaGitAlt />}
   />

   <Motion
    text={"Scss/Sass"}
    isLeft={false}
    color={"hover:border-red-300 hover:text-red-300"}
    image={<SiSass />}
   />

   <Motion
    text={"Tailwind"}
    isLeft={true}
    color={"hover:border-teal-400 hover:text-teal-400"}
    image={<SiTailwindcss />}
   />

   <Motion
    text={"MaterialUI"}
    isLeft={false}
    color={"hover:border-blue-500 hover:text-blue-500"}
    image={<SiMui />}
   />
  </div>
 );
};

export default Skills;
