import Input from "../Components/Input";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const Login = () => {
  return (
    <Wrapper navBar={false}>
      <div className="text-black w-full h-screen from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center p-8 gap-4">
        <Input label="Username" />
        <Input label="Password" hidden />
        <a
          href="/recoverAccount"
          className="w-full text-right underline text-white hover:text-green-400"
        >
          Forgot password?
        </a>
        <Button text="Login" link="/home" />
        <Button text="Register" link="/register" />
      </div>
    </Wrapper>
  );
};

export default Login;
