import React from "react";
import PlanCard from "./PlanCard";

function PlanSection() {
  return (
    <div className="py-5 px-10 max-[640px]:px-5 ">
        <h1 className="text-2xl font-bold mb-5 mt-2 text-center lg:text-4xl"> Please choose your perfect packages   </h1>
      <PlanCard/>
    </div>
  );
}

export default PlanSection;
