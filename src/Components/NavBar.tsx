const NavBar = ({activeTab}: {activeTab?: string}) => {

    const linkClasses = "divide-x text-white border-gray-900 flex items-center my-3 px-2 rounded-md"
    const activeTabClasses = "bg-green-400"
    
    return ( 
        <div className="bg-green-700 w-96 h-16 absolute flex flex-row justify-evenly bottom-0">
            <a href="/home" className={`${linkClasses} ${activeTab === "home" && activeTabClasses}`}>Home</a>
            <a href="/history" className={`${linkClasses} ${activeTab === "history" && activeTabClasses}`}>History</a>
            <a href="/new" className={`${linkClasses} ${activeTab === "new" && activeTabClasses}`}>New</a>
            <a href="/profile" className={`${linkClasses} ${activeTab === "profile" && activeTabClasses}`}>Profile</a>
            <a href="#" className={`${linkClasses} ${activeTab === "settings" && activeTabClasses}`}>Settings</a>
        </div>
     );
}
 
export default NavBar;