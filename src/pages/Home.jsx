import alumnNet from "../assets/images/BrowkShop.png"
import Homelogo from "../assets/navigation/menu - home.svg"
import SearchLogo from "../assets/navigation/menu - wallet.svg"
import ChatsLogo from "../assets/navigation/menu - analysis.svg"
import ProfileLogo from "../assets/navigation/menu - profile.svg"
import { useState } from "react";
import PageChange from "../components/PageChange";
// https://www.figma.com/design/z6ENvD19a1kFLxjHS9tCMl/SIH-App-Design?node-id=0-1&node-type=CANVAS&t=KHHTfrc5x9xAW5iT-0
function Home() {
    const [page,Setpage] = useState(1);
    return ( 
        <div className="h-[100vh] w-full overflow-hidden">
            <header className="flex justify-between h-[10vh] align-baseline w-full pr-10 pl-10 mt-2" >
                <div>
                    <img src={alumnNet} className="h-[75px] w-[100px] pt-6 pb-7" ></img>
                </div>
                <div className="flex gap-5">
                    <div onClick={() => {Setpage(1)}} className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Home</p>
                        <img className="object-cover w-[100px] "  src={Homelogo}/>
                    </div>
                    <div onClick={() => { Setpage(2)}} className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Chats</p>
                        <img className="object-cover w-[100px]  " src={ChatsLogo}/>
                    </div>
                    <div onClick={() => { Setpage(3)}} className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Search</p>
                        <img className="object-cover w-[100px]  " src={SearchLogo}/>
                    </div>
                </div>
                <div onClick={() => { Setpage(4)}} className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                    <img className=" cursor-pointer w-[100px]" src={ProfileLogo}/>
                </div>
            </header>
            <div className="h-[90vh] w-full">
                <PageChange page={page} />
            </div>

        </div>
     );
}

export default Home;