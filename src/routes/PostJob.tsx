import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import RecordingProperty from "../Components/RecordingProperty";
import Input from "../Components/Input";
import InputField from "../Components/InputField";
import { useState } from "react";

const PostJob = () => {
  const today = new Date();
  const [name, setName] = useState("123 Home Ln");
  const [date, setDate] = useState(today.toLocaleDateString());

  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-4 text-center">
        Post Job Summary
        <Input
          label="Name"
          value={name}
          setValue={setName}
          textColor="text-black"
        />
        <Input
          label="Date"
          value={date}
          setValue={setDate}
          textColor="text-black"
        />
        <RecordingProperty label="Flow Rate (gpm)" value="1.3" />
        <RecordingProperty label="Total Output" value="2.5" />
        <RecordingProperty label="Time Spraying" value="0:25:14" />
        <RecordingProperty label="Total Time" value="0:43:12" />
        <InputField label="Notes" />
        <Button link="/recording" text="Resume" />
        <Button link="/home" text="Save Job" />
        <Button link="/home" text="Discard Job" />
      </div>
      <NavBar />
    </Wrapper>
  );
};

export default PostJob;
