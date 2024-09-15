import logo from '../assets/image.png'
import { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function StudentLogin({SetStudentLogin}) {
    const navigate = useNavigate();
    const [userName,SetUserName] = useState("");
    const [password,SetPassword] = useState("");
    const [Data,SetData] = useState({});
    function userNameChange(event){
        SetUserName(event.target.value)
    }

    function passwordChange(event){
        SetPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        SetData(Data => ({userName : userName , password : password}));
        if(Data!={}){
            navigate("/schoolDetails");
        }
        console.log(Data);
    }
    return ( 
        <div className='h-full w-full relative flex flex-col items-center'>
            <IoIosArrowRoundBack onClick={() => {SetStudentLogin(false)}} className='absolute top-1 left-1 text-[50px]' />
            <img className='w-[120px] h-[120px] mt-10' src={logo}/>
            <div className='flex items-center flex-col w-[30%] text-left'>
                <p className='mt-0 text-[20px]'>Sign in as student</p>
                <form onSubmit={(event) => {handleSubmit(event)}} className='text-gray-500 flex flex-col gap-2'>
                    <p className=' text-[15px]'>Email</p>
                    <input onChange={(event) => {userNameChange(event)}} placeholder="ex.archit@email.com" type="text" className='plx`-5 border-[1px] rounded-md border-gray-500'/>
                    <p>password</p>
                    <input onChange={(event) => {passwordChange(event)}} placeholder="Password" type="password" className='plx`-5 border-[1px] rounded-md border-gray-500'/>
                    <div className='flex'>
                        <input type="checkbox"/>
                        <p>Remeber Me</p>
                    </div>
                    <p className=''>By continuing, you agree to the <span className='underline text-blue-300'>Terms of use </span> and <span className='underline text-blue-300'> Privacy Policy </span>. </p>
                    <button  className='bg-gray-500 w-full  text-white h-10 rounded-xl' >Log in</button>
                </form>
                <div className=' h-20 w-[60%] flex flex-col justify-center items-center text-[15px]'>
                    <p>Forgot your password</p>
                    <p>don't have a account ? <Link to="/signup" target='_blank' className=' text-blue-400' >Sign Up</Link></p>

                </div>
                <div className='w-[100%]'>
                    <div className='w-[100%] m-5 flex'>
                        <div className='w-[35%] border-b-2 border-gray-400'></div>
                        <div className='text-center'>Or sign in with</div>
                        <div className='w-[35%] border-b-2 border-gray-400'></div>
                    </div>
                    <div className='flex gap-10 justify-evenly'>


                    <svg className=' cursor-pointer size-[40px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path> </svg>


                    <svg className=' cursor-pointer size-[40px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path> </svg>

                    <svg className=' cursor-pointer size-[40px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                    <linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"></path>
                    </svg>

                    <svg className=' cursor-pointer size-[40px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z">
                    </path>
                    </svg>

                    </div>
                </div>

            </div>
        </div>
     );
}

export default StudentLogin;