
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Motion = ({ text, isLeft, image }) => {
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
  return (
    <motion.div
      ref={ref}
      variants={isLeft ? leftVariant : rightVariant}
      initial="hidden"
      animate={control}
      className="h-[8rem] w-[10rem] flex flex-col text-[1rem] text-white border border-zinc-300 bg-zinc-800 rounded-lg font-bold z-0 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg"
    >
     <span className="text-[3rem] m-auto">{image}</span> 

      <p className="text-center m-auto quick">{text}</p>
    </motion.div>)
}

export default Motion;
