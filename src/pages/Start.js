
import { useState } from "react";

function Start({SetStudentLogin,SetAlumniLogin}) {

    return ( 
        <div className="flex flex-col h-full w-full items-center justify-center gap-5">
                    <ul>
                        <li>your</li>
                        <li>alma</li>
                        <li>mater</li>
                        <li>matter</li>
                    </ul>
                    <button onClick={() => {SetAlumniLogin(true)}} className="border-2 border-black h-11 w-[50%] hover:bg-slate-500">Continue as alumni</button>
                    <button onClick={() => {SetStudentLogin(true)}} className="border-2 border-black h-11 w-[50%] hover:bg-slate-500">Continue as Student</button>
        </div>
     );
}

export default Start;