import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import RecordingProperty from "../Components/RecordingProperty";

const PostJob = () => {
    return ( 
    <Wrapper>            
        <div className="w-full flex flex-col gap-4 text-center">
            Post Job Summary
            <RecordingProperty label="Flow Rate (gpm)" value="1.3" />
            <RecordingProperty label="Total Output" value="2.5" />
            <RecordingProperty label="Time Spraying" value="0:25:14"/>
            <RecordingProperty label="Total Time" value="0:43:12"/>
            <Button link="/home" text="Save Job" />
            <Button link="/home" text="Discard Job" />
        </div>
        <NavBar />
    </Wrapper>
     );
}
 
export default PostJob;