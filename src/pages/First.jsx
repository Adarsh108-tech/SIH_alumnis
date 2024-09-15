import LoginStart from "./LoginStart";
import Logo from '../assets/image.png'
import { useState , useEffect} from "react";
function First() {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
    return ( 
        <div className="h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden">
        {
          loading ? <img src={Logo}></img> : <LoginStart/>
        }
      </div>
     );
}

export default First;