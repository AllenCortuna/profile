import Motion from "./motion/Motion";
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiSass, SiTailwindcss, SiPython,SiCodio, SiMui } from 'react-icons/si'

const Skills = () => {
 return <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-start flex-col gap-20 p-4 pt-20 " id="f-skill">

  <Motion text={"Javascript"}
   isLeft={true}
   color={"amber-400"}
   image={<TbBrandJavascript />} />

  <Motion text={"Css"}
   isLeft={false}
   image={<FaCss3Alt />} />

  <Motion text={"Python"} 
   isLeft={true} 
   image={<SiPython />} />

  <Motion text={"CProgramming"} 
   isLeft={false} 
   image={<SiCodio />} />

  <Motion text={"Git"} 
   isLeft={true} 
   image={<FaGitAlt />} />

  <Motion text={"Scss/Sass"} 
   isLeft={false} 
   image={<SiSass />} />

  <Motion text={"Tailwind"} 
   isLeft={true} 
   image={<SiTailwindcss />} />

  <Motion text={"MaterialUI"} 
   isLeft={false} 
   image={<SiMui />} />
  
 </div>
}

export default Skills
