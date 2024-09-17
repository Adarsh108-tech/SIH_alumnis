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
        <div className="h-screen overflow-hidden w-full ">
            <header className="flex  bg-white z-50 justify-between align-baseline items-center w-full py-1 pr-10 pl-10 s" >
                <div className="font-montserrat font-bold text-3xl">
                    alumnet
                </div>
                <div className="flex gap-2 font-poppins">
                    <div className=" flex items-center justify-center cursor-pointer hover:border-b-2 border-blue-500 hover-shadow-md">
                        <p>Home</p>
                        <img onClick={() => {Setpage(1)}} alt="" className="object-cover w-[100px] "  src={Homelogo}/>
                    </div>
                    <div className=" flex items-center cursor-pointer hover:border-b-2 border-blue-500 hover-shadow-md">
                        <p>Search</p>
                        <img onClick={() => { Setpage(3)}} alt="" className="object-cover w-[100px]  " src={SearchLogo}/>
                    </div>
                    <div className=" flex items-center cursor-pointer hover:border-b-2 border-blue-500 hover-shadow-md">
                        <p>Chats</p>
                        <img onClick={() => { Setpage(2)}} alt="" className="object-cover w-[100px]  " src={ChatsLogo}/>
                    </div>
                </div>
                <div className=" flex items-center cursor-pointer hover:border-b-2 border-red-500 hover:underline hover-shadow-md">
                    <img onClick={() => { Setpage(4)}} alt="" className=" cursor-pointer w-[100px]" src={ProfileLogo}/>
                </div>
            </header>
            <div className="h-screen w-full">
                <PageChange page={page} />
            </div>

        </div>
     );
}

export default Home;