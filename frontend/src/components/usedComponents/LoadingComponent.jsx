import React from 'react'

function LoadingComponent() {
  return (
    <div>

   <div className='overflow-hidden h-[70vh] relative   '>
    <h1 className='text-center font-semibold   flex fixed right-0 left-0 top-0 bottom-0 justify-center gap-1 items-center'><span className="loading loading-spinner loading-sm"></span>Loading... </h1>
   </div>
    </div>
  )
}

export default LoadingComponent