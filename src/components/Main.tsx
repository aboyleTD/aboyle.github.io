import HeaderBar from "./headerBar";
import selfImg from "../assets/pictures/self.jpg";
import "./main.css";
function Main() {
    return (
        <div>
            <HeaderBar removeReturnToTop={true}/>
            <div className="flex flex-col items-center w-3/4 mx-auto">
            <p className="ml-6 text-normal font-light">
                    Psst, this site is currently under construction (V 0.4). Check back again later.
                </p>
            <div className="flex flex-row items-start justify-start mt-4">
                <div className="flex flex-col items-center justify-center w-1/4 max-w-[230px]">
                    <img className=" rounded-full" src={selfImg} alt="Self.jpg" />
                    <div className="mt-2 text-2xl font-light text-center leading-none name">
                        Alan Boyle
                    </div>
                    <div className="text-lg font-light text-center leading-[1.1]">
                        MSc Computer Science <br/>
                        ETHZ
                    </div>
                </div>
                <p className="ml-6 text-lg font-light text-left leading-[1.1] w-3/4">
                    I am a computer scientist working on systems that provide insights into AI systems. 
                    In previous work I have trained AI models, developed new explainability methods, and designed user interfaces for Human-AI collaboration.
                </p>
            
            </div>
            </div>
        </div>
)
}

export default Main;