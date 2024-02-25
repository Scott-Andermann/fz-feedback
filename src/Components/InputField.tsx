const InputField = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col">
      <label className="text-left">{label}</label>
      <textarea className="h-24 rounded-md p-2"></textarea>
    </div>
  );
};

export default InputField;
