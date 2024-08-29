import { useState } from "react";
import YearDropdown from "./YearDropdown";

function Year() {
    const   StartYearOptions  = [
        {label:2000, value:1},
        {label:"Second Year", value:2},
        {label:"Third Year", value:3},
        {label:"Fourth Year", value:4},
    ]
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i);
    const [joiningYear, setJoiningYear] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    return ( 
    <div>
          <h1>Select Joining and Graduation Year</h1>
            <YearDropdown label="Joining Year" years={years} selectedYear={joiningYear} onChange={setJoiningYear}/>
            <YearDropdown label="Graduation Year" years={years} selectedYear={graduationYear} onChange={setGraduationYear}/>
    </div>
     );
}

export default Year;