interface ButtonProps {
    text: string,
    link?: string,
    onClick?: () => void,
}

const Button = ({text, link = undefined, onClick}: ButtonProps) => {
    const buttonClasses = `w-full bg-orange-300 hover:bg-orange-500 text-black rounded-full p-2`;
    if (link !== undefined) {
        return (
            <a href={link} className="w-full" >
                <button className={buttonClasses}>
                    {text}
                </button>
            </a>
        )
    }
    return ( 
        <button className={buttonClasses} onClick={onClick}>
            {text}
        </button>
     );
}
 
export default Button;