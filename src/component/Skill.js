
import LeftMotion from "./motion/LeftMotion";
import RightMotion from "./motion/RightMotion";

const Skills = () => {
  return <div className="flex justify-center content-start flex-col gap-20 p-4 pt-20 ">
   <LeftMotion text={"Javascript"}/> 
   <RightMotion text={"Python"}/> 
   <LeftMotion text={"CProgramming"}/> 
   <RightMotion text={"Git"}/> 
   <LeftMotion text={"CSS"}/> 
   <RightMotion text={"SCSS/SASS"}/> 
   <LeftMotion text={"Tailwind"}/> 
   <RightMotion text={"MaterialUI"}/> 
  </div>
}

export default Skills
