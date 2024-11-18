import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import {motion} from "framer-motion"
import { cardData } from "../../Config/userApi";
import { pricePlans } from "../../assets/data/pricePlan";
function PlanSection() {

  const[card,setCard] =useState([])

  
  const fetchData = async () => {
    try {
      const response = await cardData()
      setCard(response)

      if(card.length === 0){
        setCard(pricePlans)
      }
      
    } catch (error) {
      console.error( error.response?.data || error.message);
    }
  }

  useEffect(()=>{
    fetchData()

    
  },[])

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
        className="text-2xl font-bold max-w-[700px] mx-auto mb-10 md:mb-20 mt-2 text-center plan_card_heading md:text-4xl "> Please choose your perfect wedding packages   </motion.h1>
      <PlanCard card={card}/>
    </div>
  );
}

export default PlanSection;
