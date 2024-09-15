import RecentChats from "./RecentChats";
import ChatSearch from "./ChatSearch";
import userPhoto from "../assets/images/Avatar.png";
import { useState } from "react";
import ChatSection from "./ChatSection";
function PageChange({page}) {
    const fetchData = {
        isActive : true,
        otherChat : ["OtherChat1", "OtherChat2", "OtherChat3"],
    }

    const [Search,setSearch] = useState("");

    const Data = {
        RecentChats: [{
            accountName :  "user1",
            lastMessage : "Hello",
            time : "12:00 PM",
            profilePic : userPhoto,
            seen : true
        }, 
        {
            accountName :  "user2",
            lastMessage : "Hello",
            time : "12:00 PM",
            profilePic : userPhoto,
            seen : true
        }, 
        {
            accountName :  "user3",
            lastMessage : "Hello",
            time : "12:00 PM",
            profilePic : userPhoto,
            seen : true
        }],
        UserChat : ["UserChat1", "UserChat2", "UserChat3"],
    }

    if(page == 1 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center gap-10 ">
                <div className=" bg-slate-500 w-[20%] h-[80%] ">
                </div>
                <div className="bg-slate-500 w-[70%] h-[80%]">
                </div>
            </div>
         );
    }
    if(page ==2 ){
        return ( 
            //Chats
            <div className="flex w-full h-full justify-center items-center border-red-500 border-[2px]">
                <div className="border-red-500 border-[2px] h-full w-[25%]">
                    <ChatSearch Data={Data.RecentChats} search={Search} setSearch={setSearch}/>
                    {
                        Search == "" ?  <RecentChats Data={Data.RecentChats}/> : <RecentChats Data={Search}/>
                    }
    
                </div>
                <div className="border-red-500 border-[2px] h-full w-[75%]">
                    {/* <ChatSection Data={Data} FetchData={fetchData}/> */}
                </div>
            </div>
         );
    }
    if(page ==3 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center">
                Search
            </div>
         );
    }
    if(page ==4 ){
        return ( 
            <div className="flex w-full h-full justify-center items-center">
                Profile
            </div>
         );
    }
}

export default PageChange;