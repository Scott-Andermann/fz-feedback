import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import RecordingProperty from "../Components/RecordingProperty";
import Button from "../Components/Button";

const Profile = () => {
    return ( 
    <Wrapper>         
        <div className="flex flex-col justify-between w-full gap-4">
            <RecordingProperty label="Username" value="jayfly" />
            <RecordingProperty label="Email" value="j.fly@pestcontrol.com" />
            <RecordingProperty label="Name" value="James Fly"/>
            <RecordingProperty label="Phone" value="704-555-5555"/>
            <RecordingProperty label="Birthday" value="4-14-1986"/>
            <RecordingProperty label="Company" value="Pest Control Plus"/>
            <Button text="Edit Profile" link="/editProfile/profile" />
        </div>   
        <NavBar />
    </Wrapper>
     );
}
 
export default Profile;