import { useState } from "react";
import { Button } from "@mui/material";
import { BrowserRouter as Router , Route , Switch,Link } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import AlumniLogin from "./AlumniLogin";
import Start from "./Start"
function Login() {
    const [studentLogin,SetStudentLogin] = useState(false);
    const [alumniLogin,SetAlumniLogin] = useState(false);
    if(studentLogin){
        return <StudentLogin SetStudentLogin={SetStudentLogin}/>
    }
    else if(alumniLogin){
        return <AlumniLogin SetAlumniLogin={SetAlumniLogin} />
    }
    else{
        return <Start SetStudentLogin={SetStudentLogin} SetAlumniLogin={SetAlumniLogin} />
    }
}

export default Login;