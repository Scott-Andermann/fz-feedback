import Input from "../Components/Input";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const ResetPassword = () => {
  return (
    <Wrapper navBar={false}>
      <div className="text-black w-full h-screen from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center p-8 gap-4">
        <Input label="Username" />
        <Input label="New Password" hidden />
        <Input label="Re-Enter New Password" hidden />
        <Button text="Set New Password" link="/login" />
      </div>
    </Wrapper>
  );
};

export default ResetPassword;
