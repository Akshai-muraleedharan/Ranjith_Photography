import React from "react";

function PlanCardLoading() {
  return (
    <>
    <div className="grid lg:grid-cols-1 gap-8 ">
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
     </div>
<div className="grid lg:grid-cols-1 gap-8">
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      </div>

      <div className="grid lg:grid-cols-1 gap-8">
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      </div>
      </>
  );
}

export default PlanCardLoading;
