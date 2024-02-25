interface InputProps {
    label: string,
    hidden?: boolean,
    textColor?: string
    value?: string
}

const Input = ({label, hidden, textColor = "text-gray-50", value = ""}: InputProps) => {
    return ( 
        <div className="flex flex-col w-full">
            <label className={`bg-transparent ${textColor}`}>{label}</label>
            <input type={hidden ? "password" : "text"} className="bg-white text-black h-9 rounded-full pl-4" value={value} />
        </div>
     );
}
 
export default Input;