import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PlanCardLoading from "../usedComponents/PlanCardLoading";



function PlanCard({card,loading}) {
 
  const[featureData,setfeatureData] = useState([])
  



   

    const showmodel = (id) => {
      document.getElementById("my_modal_3").showModal();
     const data = card.find((item) => item._id === id)
     setfeatureData(data)
    };
  
  

  
  return (
    <motion.div 
    initial={{x:-100,opacity:0}}
    whileInView={{x:0,opacity:1}}
    viewport={{once:true}}
      transition={{
        delay:0.2,
        x:{type:"spring",stiffness:"60"},
        opacity:{duration:0.2},
        ease:"easeIn",
        duration:1
      }} className="grid lg:grid-cols-3 gap-8 mt-5 lg:mt-24">
      {loading ? <PlanCardLoading/> : card.map((item) => (
        <div
          key={item.plan}
          className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl"
        >
          <h3 className="text-lg font-bold leading-5">{item.plan}</h3>
          <div>
            <p className="mt-5 font-semibold leading-4">₹ {item.amount}</p>
          </div>
          <ul className="mt-5 space-y-4">
            {item.features.slice(0, 7).map((list,index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          {item.features.length > 6 ? (
            <div>
              <button
                className="text-sky-400"
                onClick={()=>showmodel(item._id)}
              >
                more...
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold leading-5">{featureData.plan}</h3>
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  
                  <ul className="py-4 space-y-2">
                  {featureData?.features?.slice(7).map((list,index)=>(
                    <li key={index}>{list}</li>
                  ))}
                  </ul>
                </div>
              </dialog>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default PlanCard;
