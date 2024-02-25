interface InputProps {
  label: string;
  hidden?: boolean;
  textColor?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  label,
  hidden,
  textColor = "text-gray-50",
  value = "",
  setValue,
}: InputProps) => {
  const handleChange = (e: any) => {
    e.preventDefault();
    if (setValue) {
      setValue(e.target.value);
    }
  };
  return (
    <div className="flex flex-col w-full">
      <label className={`bg-transparent ${textColor}`}>{label}</label>
      <input
        type={hidden ? "password" : "text"}
        className="bg-white text-black h-9 rounded-full pl-4"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
