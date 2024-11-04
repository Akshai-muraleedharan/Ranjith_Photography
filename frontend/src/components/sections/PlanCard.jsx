import React from "react";
import { pricePlans } from "../../assets/data/pricePlan";
import { motion } from "framer-motion";

function PlanCard() {
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
      {pricePlans.map((item) => (
        <div
          key={item.title}
          className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl"
        >
          <h3 className="text-lg font-bold leading-5">{item.title}</h3>
          <div>
            <p className="mt-5 font-semibold leading-4">₹ {item.price}</p>
          </div>
          <ul className="mt-5 space-y-4">
            {item.features.slice(0, 7).map((list) => (
              <li>{list}</li>
            ))}
          </ul>
          {item.features.length > 6 ? (
            <div>
              <button
                className="text-sky-400"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                more...
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold leading-5">{item.title}</h3>
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  
                  <ul className="py-4 space-y-2">
                  {item.features.slice(7,item.features.length).map((list)=>(
                    <li>{list}</li>
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
