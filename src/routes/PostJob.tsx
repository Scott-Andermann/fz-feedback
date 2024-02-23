import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

const PostJob = () => {
    return ( 
    <Wrapper>            
        <div className="text-black w-full h-[600px] from-slate-100 to-green-50 bg-gradient-to-b flex flex-col justify-center items-center relative">
            <div className="w-2/3 flex flex-col gap-4 text-center">
                Post Job Summary
                <Button link="/home" text="Save Job" />
                <Button link="/home" text="Discard Job" />
            </div>
            <NavBar />
        </div>
    </Wrapper>
     );
}
 
export default PostJob;