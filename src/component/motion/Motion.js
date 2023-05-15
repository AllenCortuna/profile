
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useHint from "../state/hint";

const Motion = ({ text, isLeft, image,color }) => {
  const leftVariant = {
    visible: { opacity: 1, scale: 1, x: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 1, x: -100 }
  }
  const rightVariant = {
    visible: { opacity: 1, scale: 1, x: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 1, x: 100 }
  }
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);
  
  const setStat = useHint((state) => state.setStat);
  // glassmorphism
  // bg-opacity-20 backdrop-blur-lg
  const cls = String(`transition-all ease-linear duration-300 h-[8rem] w-[10rem] flex flex-col text-[1rem] text-white border hover:border-2 border-zinc-300 bg-zinc-900 rounded-lg font-bold z-0  rounded drop-shadow-lg hover:bg-zinc-900 ${color}`) 
  return (
    <motion.div
      ref={ref}
      variants={isLeft ? leftVariant : rightVariant}
      initial="hidden"
      animate={control}
      className={cls}
      onClick={()=> setStat("info", text)}
    >
     <span className="text-[3rem] m-auto">{image}</span> 

      <p className="text-center m-auto space ">{text}</p>
    </motion.div>)
}

export default Motion;
