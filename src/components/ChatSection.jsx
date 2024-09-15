// {isActive , Dp, userName , desc , time , seen}
import Contact from "./Contact";

function ChatSection({Data , FetchData}) {
    return ( 
        <div>
            <div>
                <Contact seen={Data.seen} isActive={true} Dp={Data.profilePic} userName={Data.accountName} desc={Data.lastMessage} time={Data.time}/>
            </div>
        </div>
     );
}

export default ChatSection;