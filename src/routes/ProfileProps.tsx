import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useParams } from "react-router-dom";

const ProfileProps = () => {
    const params = useParams();
    
    console.log(params);
    
    return ( 
    <Wrapper>       
        <div className="flex flex-col justify-between w-full gap-4">
            <Input label="Username" value="jayfly"  textColor="text-black" />
            <Input label="Email" value="j.fly@pestcontrol.com"  textColor="text-black" />
            <Input label="Name" value="James Fly" textColor="text-black" />
            <Input label="Phone" value="704-555-5555" textColor="text-black" />
            <Input label="Birthday" value="4-14-1986" textColor="text-black" />
            <Input label="Company" value="Pest Control Plus" textColor="text-black" />
            <Button text="Save Changes" link={`/${params.forwardLink}`} />
        </div>
        <NavBar />
    </Wrapper>
     );
}
 
export default ProfileProps;