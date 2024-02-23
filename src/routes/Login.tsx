import React from "react";
import Input from "../Components/Input";
import NavBar from "../Components/NavBar";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const Login = () => {
    return ( 
        <Wrapper>
            <div className="text-black w-full h-[600px] from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center">
                <div className="w-2/3 flex flex-col gap-4">
                    <Input label="Username" />
                    <Input label="Password" hidden />
                    <Button text="Login" link="/home" />
                    <Button text="Register" link="/register" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Login;