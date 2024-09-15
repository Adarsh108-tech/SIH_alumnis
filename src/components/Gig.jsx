import React from "react";

export const Gig = () => {
  return (
   <div className="bg-white h-1/3 w-11/12 items-center justify-center flex-col py-2 px-4 gap-4 rounded-xl">
    <div className="text-lg">Web Development Project</div>
    <p className="text-xs">Please add your content here. <br/>
      Keep it short and simple.  <br/>
      And smile :) </p>
    <div className="w-full flex justify-end">
    <button className="text-white justify-end text-sm rounded-full h-6 w-1/3 bg-stone-700">Contact</button>
    </div>
   </div>
  );
};
