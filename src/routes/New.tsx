import { useState } from "react";
import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

const New = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleClick = () => {
        setIsConnected(true)
    }

    return ( 
        <Wrapper>            
            <div className="text-black w-full h-[600px] from-slate-100 to-green-50 bg-gradient-to-b flex flex-col justify-center items-center relative p-14 gap-4">
                {isConnected ? (
                    <>
                        <h2 className="text-center">Sprayer connected, tap below to start recording</h2>
                        <Button text="Start Recording" link="/recording" />
                        <NavBar />
                    </>
                ) : (
                    <>
                        <h2 className="text-center">Connect to sprayer to start tracking your jobs</h2>
                        <Button text="Connect Sprayer" onClick={handleClick} />
                        <NavBar />
                    </>
                )}
            </div>
        </Wrapper>
     );
}
 
export default New;