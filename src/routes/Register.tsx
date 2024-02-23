import Input from "../Components/Input";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const Register = () => {
    return ( 
        <Wrapper>
            <div className="text-black w-full h-[600px] from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center">
                <div className="w-2/3 flex flex-col gap-4">
                    <Input label="Email" />
                    <Input label="Enter Password" />
                    <Input label="Re-Enter Password" />
                    <Button link="/home" text="Register" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Register;