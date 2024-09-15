
import CardDemo from './CardDemo';
import React from 'react';

function ConnectBox() {
  return (
    <div className="flex flex-col justify-start font-poppins items-center gap-4 rounded-[20px] p-2 max-h-screen w-3/4  bg-[#F4F6FF]">
      <div className='text-xl text-black font-medium'>
    CONNECT
    </div>

    <CardDemo/>
    <CardDemo/>
    


  </div>
  )
}

export default ConnectBox