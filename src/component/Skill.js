
import Motion from "./motion/Motion";
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import {  MdSpaceDashboard} from 'react-icons/md'
import { SiSass, SiTailwindcss, SiPython,SiCodio } from 'react-icons/si'

const Skills = () => {
 return <div className="flex justify-center content-start flex-col gap-20 p-4 pt-20 ">

  <Motion text={"Javascript"}
   isLeft={true}
   image={<TbBrandJavascript />} />

  <Motion text={"CSS"}
   isLeft={true}
   image={<FaCss3Alt />} />

  <Motion text={"Python"} 
   isLeft={false} 
   image={<SiPython />} />

  <Motion text={"CProgramming"} 
   isLeft={true} 
   image={<SiCodio />} />

  <Motion text={"Git"} 
   isLeft={false} 
   image={<FaGitAlt />} />

  <Motion text={"SCSS/SASS"} 
   isLeft={false} 
   image={<SiSass />} />

  <Motion text={"Tailwind"} 
   isLeft={true} 
   image={<SiTailwindcss />} />

  <Motion text={"MaterialUI"} 
   isLeft={false} 
   image={<MdSpaceDashboard />} />
  
 </div>
}

export default Skills
