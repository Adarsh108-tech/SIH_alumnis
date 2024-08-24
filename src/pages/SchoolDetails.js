import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Schools from "../components/schools";
import Branch from "../components/branch";
import Year from "../components/year";

function SchoolDetails() {
    const navigate = useNavigate();
    const [page,SetPage] = useState(1);

    // const [titles,setTitles] = useState(["Select your college","year of Study" , "Select your branch","Enter your Enrollment number"])
    const titles = ["Select your college","year of Study" , "Select your branch","Enter your Enrollment number"];

    const PageDisplay = () => {
        if(page==1){
            return(
                <Schools/>
            )
        }
        else if (page==2){
            return(
                <Branch/>
            )
        }
        else if (page==3){
            return (
                <Year/>
            )
        }
        else if (page==4){
            return (
                <input placeholder="Enrollment number"></input>
            )
        }
    }



    return (
        <div className="h-full w-full flex flex-col justify-center items-center mt-[15%]">
            <div>
                <p>Student Details</p>
                <p>{titles[page]}</p>
            </div>
            <div>
                {PageDisplay()}
            </div>
            <div className="flex gap-5">
                {
                    page>1 ? <button onClick={() => { SetPage(page -1)}} className=" bg-blue-500 text-white rounded-lg w-[100px] h-[75px]">back</button> : <></>
                }
                    <button className=" bg-blue-500 text-white rounded-lg w-[100px] h-[75px]" onClick={ page==4 ?  navigate("/home") : ()=>{ SetPage(page +1)}}>continue</button>
    
            </div>
        </div>
    );
}

export default SchoolDetails;