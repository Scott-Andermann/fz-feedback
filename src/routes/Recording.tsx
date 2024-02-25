import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import RecordingProperty from "../Components/RecordingProperty";
import Button from "../Components/Button";

const Recording = () => {
    return ( 
    <Wrapper>        
        <div className="flex flex-col w-full justify-between gap-4">
            <RecordingProperty label="Flow Rate (gpm)" value="1.3" />
            <RecordingProperty label="Total Output" value="2.5" />
            <RecordingProperty label="Time Spraying" value="0:25:14"/>
            <RecordingProperty label="Total Time" value="0:43:12"/>
            <Button text="Stop Recording" link="/postJob" />
        </div>    
        <NavBar activeTab="new"/>
    </Wrapper>
     );
}
 
export default Recording;