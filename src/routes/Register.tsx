import Input from "../Components/Input";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const Register = () => {
    return ( 
        <Wrapper navBar={false}>
            <div className="text-black w-full min-h-screen from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center p-8">
                <div className="flex flex-col gap-4 w-full">
                    <Input label="Email" />
                    <Input label="Enter Password" />
                    <Input label="Re-Enter Password" />
                    <Button link="/editProfile/home" text="Register" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Register;