import man from "../assets/images/cheerful-man-pointing-finger-left-advertise-product 2.png";
import DataImg from "../assets/images/Group 100.png";
import ChartImg from "../assets/images/Group 101.png";
import usersNumberImage from "../assets/images/Group 102.png"
function Start({ SetStudentLogin, SetAlumniLogin }) {
    return (
        <div className="flex relative flex-col h-full w-full justify-center gap-5 bg-gradient-to-t from-[rgb(151,230,254)] via-white to-[rgba(197,255,241)]">
                <img className="absolute z-10 w-[250px] h-[410px] left-[820px] top-[136px] "  src={man} alt="Man pointing" />
                <img className="absolute z-10 left-[700px] top-[350px] size-[120px]"  src={DataImg} alt="Data image" />
                <img className="absolute z-10 right-[150px] top-[250px] size-[120px]"  src={ChartImg} alt="Chart image" />
                <img className="absolute z-10 h-[150px] w-[300px] top-[500px] right-[120px]"  src={usersNumberImage} alt="50k + users" />
                
                
                <div className="absolute z-10 rounded-full size-20 bg-[rgba(6,98,205,1)] left-[750px] top-[200px]"></div>
                <div className="absolute rounded-full bg-[rgba(190,239,255,1)] left-[-130px] top-[-74px] size-[400px]"></div>
                <div className="absolute rounded-full size-[400px] bg-[rgba(190,233,255,1)] left-[750px] top-[150px] "></div>
                <div className="absolute rounded-full bg-[rgba(143,188,255,1)] size-[310px] left-[800px] top-[240px]"></div>

            <div className="text-left w-[50%] z-10 ml-10">
                <h2 className="font-bold font-popins text-[40px] font-{700} line leading-{100px} space-x-7">Fostering Lifelong <br></br> <span style={{ color: '#2D81FF' }}>Connections</span></h2>
                <p className="w-[75%] text-[15px] m-4">You can read this text, but it doesn’t matter. It’s concept, not important for your life or life your friends</p>
                <button
                    onClick={() => { SetAlumniLogin(true); }}
                    className="rounded-2xl bg-white hover:shadow-md h-11 w-[25%] hover:bg-slate-500 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    Continue as Alumni
                </button>
                <button
                    onClick={() => { SetStudentLogin(true); }}
                    className="rounded-2xl bg-white hover:shadow-md h-11 w-[25%] hover:bg-slate-500 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    Continue as Student
                </button>
            </div>
        </div>
    );
}

export default Start;
