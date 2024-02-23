import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import Cards from "../Components/Cards";

const Home = () => {
    return ( 
        <Wrapper>
            <div className="text-black w-full h-[600px] from-slate-100 to-green-50 bg-gradient-to-b flex flex-col justify-center items-center relative">
                <h2>Welcome, User</h2>
                <NavBar />
                <div className="flex flex-col">
                    <h3>Latest</h3>
                    <div className="border-2 border-solid border-green-600 w-full flex flex-row gap-8 justify-around p-3 rounded-md">
                        <div>
                            <p>January 1, 2024</p>
                            <p className="text-lg font-bold text-green-600">1:24:13</p>
                            <p>Total Time</p>
                        </div>
                        <div>
                            <p>Cincinatti, OH</p>
                            <p className="text-lg font-bold text-green-600">2.35 Gal</p>
                            <p>Total Sprayed</p>
                        </div>
                    </div>
                </div>
                <Cards />
            </div>
        </Wrapper>
     );
}
 
export default Home;