function Contact({isActive , Dp, userName , desc , time , seen}) {
    if(desc.length > 10){
        desc = desc.slice(0,10) + "...";    
    }
    return ( 
        <div className="w-[100%] h-[100%] flex border-red-500 border-2 rounded-lg">
            <div className="relative rounded-full h-[100%]">
                <img src={Dp} className="rounded-full p-2"/>
                {isActive ? 
                <div className=" absolute top-0 right-1 bg-green-500 rounded-full size-3"></div> : <></>
                }
            </div>
            <div className="w-[100%] p-2">
                <p>{userName}</p>
                <div className="flex justify-between w-[100%]">
                    <p className={
                        seen ? "text-gray-500" : "text-black"
                    }>{desc}</p>
                    <p>{time}</p>
                </div>
            </div>
        </div>
     );
}

export default Contact;