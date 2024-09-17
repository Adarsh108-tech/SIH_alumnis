//import React from 'react'

import { Gig } from "./Gig"

function WorkBox() {
  return (
    <div className="flex flex-col overflow-x-hidden shadow-neutral-300 shadow-sm  justify-start font-poppins items-center gap-4 no-scrollbar h-[85vh] overflow-y-scroll rounded-[16px] p-2 w-1/4 pt-0 bg-[#F4F6FF] ">
        <div className='text-xl sticky flex justify-center py-2 bg-[#F4F6FF]  top-0 w-full z-50 text-black font-medium' >WORK
        </div>
    
      <Gig/>
      <Gig/>
      <Gig/>
      <Gig/>
      <Gig/>
      <Gig/>
    </div>
  )
}

export default WorkBox