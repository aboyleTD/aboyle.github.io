import HeaderBar from "./headerBar";
import selfImg from "../assets/pictures/self.png";
function Main() {
    return (
        <div>
            <HeaderBar />
            <div>
            Hi, this site is currently under construction V3.1. Check back again later. 
            <img src={selfImg} alt="Missing" />
            </div>
        </div>
)
}

export default Main;