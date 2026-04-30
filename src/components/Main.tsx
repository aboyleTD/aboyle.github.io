import { useState } from "react";
import HeaderBar from "./headerBar";
import selfImg from "../assets/pictures/self.jpg";
import TypewriterComponent from "typewriter-effect";
import "./main.css";


function TypeWriterWrapper({ text, onTyped, pauseDuration, isVisible }: { text: string, onTyped?: () => void, pauseDuration: number, isVisible: boolean }) {
    const [hasBeenTyped, setHasBeenTyped] = useState<boolean>(false);
    
    return (
        <>
            {isVisible && !hasBeenTyped && <TypewriterComponent
                options={{
                    autoStart: true,
                    loop: false,
                    delay: 35,
                    deleteSpeed: 20,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString(text)
                        .pauseFor(pauseDuration)
                    .callFunction(() => onTyped && onTyped())
                    .pauseFor(300)
                    .callFunction(() => setHasBeenTyped(true))
                    .start();
            }}
            
        />}
        {isVisible && hasBeenTyped && <span className="">{text}</span>}
        </>
    )
}

function ResponseButton({ text, onClick, isVisible, hasBeenClicked }: { text: string, onClick: () => void, isVisible: boolean, hasBeenClicked: boolean }) {
    return (
        <div className="flex mb-1 mt-2">
            <button aria-hidden={!isVisible}
            className={`text-xs inline-block ml-auto border-1 px-1 pb-1 pt-[1px] rounded-sm transition-opacity transition-transform duration-300 ${
            isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
            }
            ${hasBeenClicked ? "bg-gray-500 text-white disabled" : "bg-transparent hover:border-gray-400 hover:border-2"}
            `} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}


function Main() {
    const [conversationState, setConversationState] = useState<number>(0);
    const monotonicSetConversationState = (newState: number) => {
        console.log("setting conversation state", newState);
        if (newState > conversationState) {
            setConversationState(newState);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <HeaderBar removeReturnToTop={true}/>
            <div className="w-3/4 ">
                {/* <p className="ml-6 text-normal font-light">
                        Psst, this site is currently under construction (V 0.4). Check back again later.
                </p> */}
                <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-center justify-center w-1/4 max-w-[230px]">
                        <img className=" rounded-full" src={selfImg} alt="Self.jpg" />
                        <div className="mt-2 text-2xl font-light text-center leading-none name">
                            Alan Boyle
                        </div>
                        <div className="text-lg font-light text-center text-nowrap leading-[1.1]">
                            MSc Computer Science <br/>
                            ETH Zurich
                        </div>
                    </div>
                    <div className="text-lg font-light text-justify leading-[1.1] about ml-6 w-3/4">
                        {TypeWriterWrapper({ text: "Hi, my name is Alan.", onTyped: () => monotonicSetConversationState(1), pauseDuration: 100, isVisible: true })}
                        {<ResponseButton text="Hi, what do you do?" onClick={() => monotonicSetConversationState(2)} isVisible={conversationState >= 1} hasBeenClicked={conversationState >= 2} />}
                        {TypeWriterWrapper({ text: "I help people get insight into AI decision-making.", onTyped: () => monotonicSetConversationState(3), pauseDuration: 100, isVisible: conversationState >= 2 })}
                        {<ResponseButton text="What kind of projects have you worked on?" onClick={() => monotonicSetConversationState(4)} isVisible={conversationState >= 3} hasBeenClicked={conversationState >= 4} />}
                        {TypeWriterWrapper({ text: "I have developped novel AI models, explainability methods and user interfaces.", onTyped: () => monotonicSetConversationState(5), pauseDuration: 100, isVisible: conversationState >= 4 })}
                        {<ResponseButton text="Can you show me some of your work?" onClick={() => monotonicSetConversationState(6)} isVisible={conversationState >= 5} hasBeenClicked={conversationState >= 6} />}
                        {TypeWriterWrapper({ text: "Check out the rest of the site to find out more ;)", onTyped: () => monotonicSetConversationState(7), pauseDuration: 100, isVisible: conversationState >= 6 })}
                    </div>
                
                </div>
            </div>
            {/* <div className="w-3/4 h-1 border-1 border-slate-300"/> */}
        </div>
)
}

export default Main;