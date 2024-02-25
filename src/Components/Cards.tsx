const Cards = () => {
    const cardClasses = "h-32 w-32 bg-gray-400 rounded-lg p-3 flex justify-center items-center"
    const headingClasses = "text-center"
    const linkClasses = "text-black"
    return ( 
        <div>
            <div className="flex flex-row gap-4 mt-4">
                <a className={linkClasses} href="/history">
                    <div className={cardClasses}>
                        <h5 className={headingClasses}>Job History</h5>
                    </div>
                </a>
                <a className={linkClasses} href="/profile">
                    <div className={cardClasses}>
                        <h5 className={headingClasses}>Technician Profile</h5>
                    </div>
                </a>
            </div>
            <div className="flex flex-row gap-4 mt-4">
                <a className={linkClasses} href="#">
                    <div className={cardClasses}>
                        <h5 className={headingClasses}>Manage Sprayers</h5>
                    </div>
                </a>
                <a className={linkClasses} href="https://fzspray.com/pages/troubleshoot">
                    <div className={cardClasses}>
                        <h5 className={headingClasses}>Troubleshoot</h5>
                    </div>
                </a>
            </div>

        </div>
     );
}
 
export default Cards;