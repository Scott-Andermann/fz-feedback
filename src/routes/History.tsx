import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";

const History = () => {
    return ( 
        <Wrapper>            
            <div className="text-black w-full h-[600px] from-slate-100 to-green-50 bg-gradient-to-b flex flex-col justify-center items-center relative">
                <div>This is the history page</div>
                <NavBar />
            </div>
        </Wrapper>
     );
}
 
export default History;