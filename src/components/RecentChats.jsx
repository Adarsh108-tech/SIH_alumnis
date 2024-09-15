import Contact from "./Contact";

function RecentChats({Data}) {

    return ( 
        <div className="w-[100%] flex flex-col gap-4 p-2 ">
            {
                Data.map((element) => (
                    <Contact seen={Data.seen} isActive={true} Dp={element.profilePic} userName={element.accountName} desc={element.lastMessage} time={element.time}/>
                    ))
            }
            
        </div>
     );
}

export default RecentChats;