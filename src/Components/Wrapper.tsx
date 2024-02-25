import React from "react";

const Wrapper = ({children, navBar = true}: {children: React.ReactNode, navBar?: boolean}) => {
    return ( 
        <div className="bg-black w-screen h-screen relative">
            <div className="w-96 m-auto">
                <div className="text-black w-full min-h-screen max-h-screen from-slate-100 to-green-50 bg-gradient-to-b flex flex-col justify-center items-center relative overflow-hidden">
                    <div className={`w-full h-full overflow-scroll flex flex-col items-center p-8 gap-4 ${navBar && "pb-20"}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Wrapper;