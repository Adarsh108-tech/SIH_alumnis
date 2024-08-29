import { RiHome5Fill } from "react-icons/ri";
import { PiChatsThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci"
import { RiAccountCircleLine } from "react-icons/ri";
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
            <header className="w-full h-[10%] flex justify-center">
                <button className="text-blue-400 underline">Connect</button>
                <span> &nbsp; | &nbsp; </span>
                <button className="text-blue-400 underline">Work</button>
            </header>
            <div className="h-[75%] w-full">
                <PageChange page={page} />
            </div>

            <footer className="flex justify-center align-baseline" >
                <img onClick={() => {Setpage(1)}} className=" cursor-pointer hover:shadow-lg"  src={Homelogo}/>
                <img onClick={() => { Setpage(2)}} className=" cursor-pointer hover:shadow-lg" src={ChatsLogo}/>
                <img onClick={() => { Setpage(3)}} className=" cursor-pointer hover:shadow-lg" src={SearchLogo}/>
                <img onClick={() => { Setpage(4)}} className=" cursor-pointer hover:shadow-lg" src={ProfileLogo}/>
            </footer>
        </div>
     );
}

export default Home;