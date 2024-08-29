import Login from "./Login";
import { useState } from "react";
function LoginStart() {
    const [Start , SetStart] = useState(false);

    if(Start){
        return(
            <Login/>
        )
    }
    else{
        return ( 
            <div  className="bg-[radial-gradient(circle_at_center,white,rgb(148,191,255))] relative flex flex-col h-[120vh] w-full items-center justify-center gap-5 -translate-y-5 " >
                <ul className=" w-[32%] text-center mt-5">
                    <li className=" font-bold font-popins text-[60px] font-{700} line leading-{100px} space-x-7">your <span style={{ color: '#2D81FF' }}>alma</span></li>
                    <li className=" font-bold font-popins text-[60px] font-{700} line leading-{100px} space-x-7">mater <span style={{ color: '#2D81FF' }}>Matter</span></li>
                    <li>
                        Join our community and start connecting with fellow alumni who share your alma mater and are here to support your journey.
                    </li>
                </ul>
                <button className="border-2 rounded-xl text-white bg-[rgb(50,60,80)] border-black h-11 w-[20%] hover:bg-slate-500" onClick={() => {SetStart(!Start)}}>Get Started</button>
            </div>
         )
    }

}

export default LoginStart;