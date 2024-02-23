import React from "react";

const Wrapper = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-black w-screen h-screen relative">
            <div className="w-96 m-auto">
                {children}
            </div>
        </div>
     );
}
 
export default Wrapper;