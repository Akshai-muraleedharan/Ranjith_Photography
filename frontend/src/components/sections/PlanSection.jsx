import React from "react";
import PlanCard from "./PlanCard";
import {motion} from "framer-motion"
function PlanSection() {
  return (
    <div className="py-5 px-10 max-[640px]:px-5 relative">
        <motion.h1
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{once:true}}
        transition={{
          delay:0.3,
          x:{type:"spring",stiffness:"60"},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1
        }}
        className="text-2xl font-bold mb-5 mt-2 text-center plan_card_heading lg:text-4xl"> Please choose your perfect packages   </motion.h1>
      <PlanCard/>
    </div>
  );
}

export default PlanSection;
