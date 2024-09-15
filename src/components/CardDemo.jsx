
import { cn } from "./lib/utils";


function CardDemo() {
  return (
    (<div className="max-w-full w-11/12 h-5/6 group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-full rounded-md shadow-xl  w-full mx-auto backgroundImage flex flex-col justify-between pt-4 px-4",
          "bg-[url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
Adarsh Tiwari
            </p>
            <p className="text-sm text-gray-400">Student</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Inauguration of New Amphitheatre 
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum fugit obcaecati pariatur eum odit debitis consequuntur. Officia harum nostrum cumque culpa quis. Officiis facilis optio maiores magni eius. Delectus!
          </p>
        </div>
      </div>
    </div>)
  );
}

export default CardDemo;