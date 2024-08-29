import man from "../assets/images/cheerful-man-pointing-finger-left-advertise-product 2.png";
import DataImg from "../assets/images/Group 100.png";
import ChartImg from "../assets/images/Group 101.png";

function Start({ SetStudentLogin, SetAlumniLogin }) {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-5">
            <div className="relative bg-red-600 h-5 w-5">
                <img className="absolute h-[250px] w-[500px] left-100 top-100"  src={man} alt="Man pointing" />
                <img className="absolute h-[250px] w-[500px] left-105 top-5"  src={DataImg} alt="Data image" />
                <img className="absolute h-[250px] w-[500px] left-10 top-10"  src={ChartImg} alt="Chart image" />
                
                <div className="absolute rounded-full bg-[rgba(166,239,255,1)] left-15 top-15 w-20 h-20"></div>
                <div className="absolute rounded-full bg-[rgba(190,233,255,1)] left-20 top-20 w-16 h-16"></div>
                <div className="absolute rounded-full bg-[rgba(6,98,205,1)] left-25 top-25 w-12 h-12"></div>
                <div className="absolute rounded-full bg-[rgba(143,188,255,1)] left-30 top-30 w-8 h-8"></div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold">Welcome to the Platform</h2>
                <p className="mb-4">Please choose how you would like to continue:</p>
                <button
                    onClick={() => { SetAlumniLogin(true); }}
                    className="border-2 rounded-lg border-black h-11 w-[50%] hover:bg-slate-500 mb-4"
                >
                    Continue as Alumni
                </button>
                <button
                    onClick={() => { SetStudentLogin(true); }}
                    className="border-2 rounded-lg border-black h-11 w-[50%] hover:bg-slate-500"
                >
                    Continue as Student
                </button>
            </div>
        </div>
    );
}

export default Start;
