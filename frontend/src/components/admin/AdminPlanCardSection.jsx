import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import { pricePlans } from "../../assets/data/pricePlan";
import { adminCardData } from "../../Config/adminApi";
import PlanCard from "../sections/PlanCard";


function AdminPlanCardSection() {

  const[card,setCard] =useState([])

  
  const fetchData = async () => {
    try {
      const response = await adminCardData()
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
        className="text-2xl font-bold mb-5 mt-2 text-center plan_card_heading lg:text-4xl"> Please choose your perfect packages   </motion.h1>
      <PlanCard card={card}/>
    </div>
  );
}

export default AdminPlanCardSection;
