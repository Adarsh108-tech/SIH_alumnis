
import CardDemo from './CardDemo';
import React from 'react';

function ConnectBox() {
  return (
    <div className="flex flex-col overflow-x-hidden justify-start font-poppins items-center gap-4 no-scrollbar relative h-[85vh] shadow-neutral-300 shadow-sm overflow-y-scroll rounded-[16px] p-2 w-3/4 pt-0 bg-[#F4F6FF]">
      <div className='text-xl sticky flex justify-center py-2 bg-[#F4F6FF]  top-0 w-full z-50 text-black font-medium'>
    CONNECT
    </div>

    <CardDemo/>
    <CardDemo/>
    <CardDemo/>
    <CardDemo/>
    <CardDemo/>
    <CardDemo/>
    


  </div>
  )
}

export default ConnectBox