import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Schools from "../components/schools";
import Branch from "../components/branch";
import Year from "../components/year";
import { FaArrowDown } from "react-icons/fa";

function SchoolDetails() {
    const navigate = useNavigate();
    const [page,SetPage] = useState(1);
    // const [titles,setTitles] = useState(["Select your college","year of Study" , "Select your branch","Enter your Enrollment number"])
    const titles = ["Select your college","Select your branch" , "Select joining year and passing year","Enter your Enrollment number"];

    const PageDisplay = () => {
        if(page==0){
            return(
                <Schools/>
            )
        }
        else if (page==1){
            return(
                <Branch/>
            )
        }
        else if (page==2){
            return (
                <Year/>
            )
        }
        else if (page==3){
            return (
                <input placeholder="Enrollment number"></input>
            )
        }
    }



    return (
        <div className="h-full w-full flex flex-col relative items-center">
                <div className="absolute z-10 rounded-full size-20 bg-[rgba(190,239,255,1)] md:bg-[rgba(6,98,205,1)] md:right-[35%] md:top-[10%]"></div>
                <div className="absolute rounded-full bg-[rgba(190,239,255,1)] left-[-130px] top-[-74px] size-[400px]"></div>
                <div className="absolute rounded-full md:size-[400px] bg-[rgba(190,233,255,1)] right-[10%] top-[150px] "></div>

            <nav className="w-full text-center h-[20%] p-5">
                <h1 className=" text-2xl font-bold">Students Details</h1>
            </nav>
            <div className=" flex">
                <p className="text-[20px] m-10">{titles[page]}<FaArrowDown /></p>
            </div>
                <div>
                    {PageDisplay()}
                </div>
            <div className="flex gap-5 mt-10">
                {
                    page>1 ? <button onClick={() => { SetPage(page -1)}} className=" bg-blue-500 text-white rounded-lg w-[100px] h-[75px]">back</button> : <></>
                }
                    <button className=" bg-blue-500 text-white rounded-lg w-[100px] h-[75px]" onClick={ page==4 ?  navigate("/home") : ()=>{ SetPage(page +1)}}>continue</button>
                    
            </div>
        </div>
    );
}

export default SchoolDetails;