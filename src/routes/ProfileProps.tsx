import { useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import Input from "../Components/Input";

const ProfileProps = () => {
  const params = useParams();
  const [username, setUsername] = useState("jayfly");
  const [email, setEmail] = useState("j.fly@pestcontrol.com");
  const [name, setName] = useState("James Fly");
  const [phone, setPhone] = useState("704-555-5555");
  const [birthday, setBirthday] = useState("4-14-1986");
  const [company, setCompany] = useState("Pest Control Plus");

  return (
    <Wrapper>
      <div className="flex flex-col justify-between w-full gap-4">
        <Input
          label="Username"
          value={username}
          textColor="text-black"
          setValue={setUsername}
        />
        <Input
          label="Email"
          value={email}
          textColor="text-black"
          setValue={setEmail}
        />
        <Input
          label="Name"
          value={name}
          textColor="text-black"
          setValue={setName}
        />
        <Input
          label="Phone"
          value={phone}
          textColor="text-black"
          setValue={setPhone}
        />
        <Input
          label="Birthday"
          value={birthday}
          textColor="text-black"
          setValue={setBirthday}
        />
        <Input
          label="Company"
          value={company}
          textColor="text-black"
          setValue={setCompany}
        />
        <Button text="Save Changes" link={`/${params.forwardLink}`} />
      </div>
      <NavBar />
    </Wrapper>
  );
};

export default ProfileProps;
