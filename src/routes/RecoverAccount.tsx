import Input from "../Components/Input";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";

const RecoverAccount = () => {
  return (
    <Wrapper navBar={false}>
      <div className="text-black w-full h-screen from-slate-900 to-green-950 bg-gradient-to-b flex flex-col justify-center items-center p-8 gap-4">
        <Input label="Email" />
        <Button text="Send Recovery Email" link="/resetPassword" />
      </div>
    </Wrapper>
  );
};

export default RecoverAccount;
