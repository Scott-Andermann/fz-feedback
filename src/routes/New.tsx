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
            <NavBar activeTab="new"/>
            {isConnected ? (
                <>
                    <h2 className="text-center">Sprayer connected, tap below to start recording</h2>
                    <Button text="Start Recording" link="/recording" />
                </>
            ) : (
                <>
                    <h2 className="text-center">Connect to sprayer to start tracking your jobs</h2>
                    <Button text="Connect Sprayer" onClick={handleClick} />
                </>
            )}
        </Wrapper>
     );
}
 
export default New;