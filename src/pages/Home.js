import alumnNet from "../assets/images/BrowkShop.png"
import Homelogo from "../assets/navigation/menu - home.svg"
import SearchLogo from "../assets/navigation/menu - wallet.svg"
import ChatsLogo from "../assets/navigation/menu - analysis.svg"
import ProfileLogo from "../assets/navigation/menu - profile.svg"
import { useState } from "react";
import PageChange from "../components/PageChange";
function Home() {
    const [page,Setpage] = useState(1);
    return ( 
        <div className="h-[100vh] w-full">
            <header className="flex justify-between align-baseline w-full pr-10 pl-10 mt-2" >
                <div>
                    <img src={alumnNet} className="h-[75px] w-[100px] pt-6 pb-7" ></img>
                </div>
                <div className="flex gap-5">
                    <div className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Home</p>
                        <img onClick={() => {Setpage(1)}} className="object-cover w-[100px] "  src={Homelogo}/>
                    </div>
                    <div className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Chats</p>
                        <img onClick={() => { Setpage(2)}} className="object-cover w-[100px]  " src={ChatsLogo}/>
                    </div>
                    <div className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                        <p>Search</p>
                        <img onClick={() => { Setpage(3)}} className="object-cover w-[100px]  " src={SearchLogo}/>
                    </div>
                </div>
                <div className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                    <img onClick={() => { Setpage(4)}} className=" cursor-pointer w-[100px]" src={ProfileLogo}/>
                </div>
            </header>
            <div className="h-[75%] w-full">
                <PageChange page={page} />
            </div>

        </div>
     );
}

export default Home;