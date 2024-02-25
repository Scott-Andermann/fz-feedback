interface InputProps {
    label: string,
    hidden?: boolean,
}

const Input = ({label, hidden}: InputProps) => {
    return ( 
        <div className="flex flex-col w-full">
            <label className="bg-transparent text-gray-50">{label}</label>
            <input type={hidden ? "password" : "text"} className="bg-white text-black h-9 rounded-full pl-4" />
        </div>
     );
}
 
export default Input;