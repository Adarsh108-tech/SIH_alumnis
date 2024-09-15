import man from "../assets/images/cheerful-man-pointing-finger-left-advertise-product 2.png";
import DataImg from "../assets/images/Group 100.png";
import ChartImg from "../assets/images/Group 101.png";
import usersNumberImage from "../assets/images/Group 102.png"
function Start({ SetStudentLogin, SetAlumniLogin }) {
    console.log(window.innerHeight + " " + window.innerWidth);
    return (
        <div className="flex relative flex-col h-full w-full justify-center gap-5 bg-gradient-to-t from-[rgb(151,230,254)] via-white to-[rgba(197,255,241)]">
                <img className="absolute z-10 md:w-[20%] w-[50%] md:h-[410px] right-[5%] md:right-[16%] top-[136px] "  src={man} alt="Man pointing" />
                <img className="absolute z-10 right-[30%] md:top-[350px] top-[10rem] md:w-[10rem] w-[5rem]"  src={DataImg} alt="Data image" />
                <img className="absolute z-10 right-[12%] top-[20rem] md:top-[250px] md:size-[8rem] w-[5rem]"  src={ChartImg} alt="Chart image" />
                <img className="absolute z-10 md:h-[22%] md:w-[30%] md:top-[500px] md:right-[120px] w-[13rem] top-[50%] right-[1em]"  src={usersNumberImage} alt="50k + users" />
                
                
                <div className="absolute z-10 rounded-full size-20 bg-[rgba(190,239,255,1)] md:bg-[rgba(6,98,205,1)] md:right-[35%] md:top-[200px]"></div>
                <div className="absolute rounded-full bg-[rgba(190,239,255,1)] left-[-130px] top-[-74px] size-[400px]"></div>
                <div className="absolute rounded-full md:size-[400px] bg-[rgba(190,233,255,1)] right-[10%] top-[150px] "></div>
                <div className="absolute rounded-full bg-[rgba(143,188,255,1)] size-[310px] right-[13%] top-[240px]"></div>

            <div className="text-left w-[50%] z-10 md:ml-10 ml-5">
                <h2 className="font-bold font-popins text-[40px] font-{700} line leading-{100px} space-x-7">Fostering Lifelong <br></br> <span style={{ color: '#2D81FF' }}>Connections</span></h2>
                <p className="w-[75%] text-[15px] m-4">You can read this text, but it doesn’t matter. It’s concept, not important for your life or life your friends</p>
                <button
                    onClick={() => { SetAlumniLogin(true); }}
                    className="rounded-2xl bg-white hover:shadow-md h-11 w-[80%] md:w-[25%] hover:bg-slate-500 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    Continue as Alumni
                </button>
                <button
                    onClick={() => { SetStudentLogin(true); }}
                    className="rounded-2xl bg-white hover:shadow-md h-11 w-[80%] md:w-[25%] hover:bg-slate-500 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                    Continue as Student
                </button>
            </div>
        </div>
    );
}

export default Start;
