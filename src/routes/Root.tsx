import Wrapper from "../Components/Wrapper";
import IMAGES from "../assets/Images";

const Root = () => {
    return ( 
        <Wrapper navBar={false}>
            <div className="bg-white h-screen w-full flex flex-col justify-center items-center">
                <img src={IMAGES.fzLogo} />
                <a href="/login" className="underline text-lg font-bold">Click to login</a>
            </div>
        </Wrapper>
     );
}
 
export default Root;