const NavBar = () => {

    const linkClasses = "divide-x text-white border-gray-900 flex items-center"
    
    return ( 
        <div className="bg-green-700 w-96 h-16 absolute flex flex-row justify-evenly bottom-0">
            <a href="/home" className={linkClasses}>Home</a>
            <a href="/history" className={linkClasses}>History</a>
            <a href="/new" className={linkClasses}>New</a>
            <a href="#" className={linkClasses}>Profile</a>
            <a href="#" className={linkClasses}>Settings</a>
        </div>
     );
}
 
export default NavBar;