import { useState } from "react";
import HeaderBar from "./headerBar";
import selfImg from "../assets/pictures/self.jpg";
import TypewriterComponent from "typewriter-effect";
import { profileLinks } from "../text/links";
import { FaGithub } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import "./main.css";


function TypeWriterWrapper({ text, onTyped, pauseDuration, isVisible, hasBeenTypedInit }: { text: string, onTyped?: () => void, pauseDuration: number, isVisible: boolean, hasBeenTypedInit: boolean }) {
    const [hasBeenTyped, setHasBeenTyped] = useState<boolean>(hasBeenTypedInit);

    return (
        <>
            {isVisible && !hasBeenTyped && 
            <div className="w-2/3 text-wrap">
                <TypewriterComponent
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 30,
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
                />
            </div>
        }
        {isVisible && hasBeenTyped && <p className="w-2/3 mb-1">{text}</p>}
        </>
    )
}

function ResponseButton({ text, onClick, isVisible, hasBeenClicked }: { text: string, onClick: () => void, isVisible: boolean, hasBeenClicked: boolean }) {
    return (
        <div className="flex ">
            <button aria-hidden={!isVisible}
            className={`text-xs inline-block ml-auto  rounded-sm transition-opacity transition-transform duration-300 ${
            isVisible ? "opacity-100 translate-y-0 pointer-events-auto border-1 px-1 pb-1 pt-[1px] my-1" : "opacity-0 -translate-y-1 pointer-events-none invisible h-0"
            }
            ${hasBeenClicked ? " response-box-clicked " : " bg-transparent hover:scale-105"}
            `} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}


function Main() {
    // TODO make local storage access cleaner

    const [conversationState, setConversationState] = useState<number>(localStorage.getItem("conversationState") ? parseInt(localStorage.getItem("conversationState") as string) : 0);
    const [storyLine, setStoryLine] = useState<string>(localStorage.getItem("storyLine") ? localStorage.getItem("storyLine") as string : "undecided");

    const storyLineResponse = new Map<string, string>([
        ["undecided", "I have developped novel AI models, explainability methods and user interfaces."],
        ["interests", "My main interests are  NLP, XAI, and Human-AI interaction."],
        ["languages", "I speak German, English, and Japanese."],
        ["projects", "I have helped develop novel AI models, explainability methods, and user interfaces."],
    ]);

    const saveStoryLine = (line: string) => {
        localStorage.setItem("storyLine", line);
    }

    const monotonicSetStoryLine = (newLine: string) => {
        if (newLine !== storyLine) {
            setStoryLine(newLine);
            saveStoryLine(newLine);
        }
    }

    const saveConversationState = (state: number) => {
        localStorage.setItem("conversationState", state.toString());
    }

    const monotonicSetConversationState = (newState: number) => {
        if (newState > conversationState) {
            setConversationState(newState);
            saveConversationState(newState);
        }
    }
    const divergentStoryProgression = (newState: number, newLine: string) => {
        monotonicSetConversationState(newState);
        monotonicSetStoryLine(newLine);
    }

    const resetConversationState = () => {
        setConversationState(0);
        saveConversationState(0);
        setStoryLine("undecided");
        saveStoryLine("undecided");
        // Force page reload to reset typewriter states
        window.location.reload();
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <HeaderBar removeReturnToTop={true}/>
            <div className="w-3/4 ">
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
                        {/* TODO add links */}
                        <div className="flex flex-row mt-2 gap-2 text-3xl">
                            <a className="" href={`mailto:${profileLinks.email}`} target="_blank"><HiOutlineMail /></a>
                            <a className="" href={profileLinks.github} target="_blank"><FaGithub /></a>
                            {/* <a className="font-light text-sm" href={profileLinks.portfolio} target="_blank">{profileLinks.portfolio}</a> */}
                            <a className="" href={profileLinks.googleScholar} target="_blank"><SiGooglescholar /></a>
                        </div>
                    </div>
                    <div className="text-lg font-light text-justify leading-[1.1] about ml-6 w-3/4">
                        {TypeWriterWrapper({ text: "Hi, my name is Alan.", onTyped: () => monotonicSetConversationState(1), pauseDuration: 100, isVisible: true, hasBeenTypedInit: conversationState >= 1 })}
                        {<ResponseButton text="Hi, what do you do?" onClick={() => monotonicSetConversationState(2)} isVisible={conversationState >= 1} hasBeenClicked={conversationState >= 2} />}
                        {TypeWriterWrapper({ text: "I help people develop and get insight into AI systems.", onTyped: () => monotonicSetConversationState(3), pauseDuration: 100, isVisible: conversationState >= 2, hasBeenTypedInit: conversationState >= 3 })}
                        {<ResponseButton text="What are your interests?" onClick={() => divergentStoryProgression(4, "interests")} isVisible={conversationState >= 3 && (storyLine === "undecided" || storyLine === "interests")} hasBeenClicked={conversationState >= 4} />}
                        {<ResponseButton text="What languages do you speak?" onClick={() => divergentStoryProgression(4, "languages")} isVisible={conversationState >= 3 && (storyLine === "undecided" || storyLine === "languages")} hasBeenClicked={conversationState >= 4} />}
                        {<ResponseButton text="What kind of projects have you worked on?" onClick={() => divergentStoryProgression(4, "projects")} isVisible={conversationState >= 3 && (storyLine === "undecided" || storyLine === "projects")} hasBeenClicked={conversationState >= 4} />}
                        {TypeWriterWrapper({ text: storyLineResponse.get(storyLine) ?? "Default storyline text", onTyped: () => monotonicSetConversationState(5), pauseDuration: 100, isVisible: conversationState >= 4, hasBeenTypedInit: conversationState >= 5 })}
                        {<ResponseButton text="What else can you tell me about yourself?" onClick={() => monotonicSetConversationState(6)} isVisible={conversationState >= 5} hasBeenClicked={conversationState >= 6} />}
                        {TypeWriterWrapper({ text: "Check out the rest of the site to find out more 😉", onTyped: () => monotonicSetConversationState(7), pauseDuration: 100, isVisible: conversationState >= 6, hasBeenTypedInit: conversationState >= 7 })}
                        {<ResponseButton text="Reset" onClick={() => resetConversationState()} isVisible={conversationState >= 7} hasBeenClicked={conversationState >= 8} />}

                    </div>
                </div>
                <div className={`transition-opacity transition-transform duration-300 ${conversationState >= 7 ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
                 mt-3 flex flex-col items-center justify-center`}>
                    {/* <div className="flex flex-row gap-2 justify-between w-full ">
                        <p className="text-lg font-light text-justify leading-[1.1] bg-gradient-to-b from-gray-700 to-transparent p-4 rounded-lg w-1/4">
                            Interests (FILLER) <br/>
                            - Explainable AI <br/>
                            - NLP
                        </p>
                        <p className="text-lg font-light text-justify leading-[1.1] bg-gradient-to-b from-gray-700 to-transparent p-4 rounded-lg w-1/4">
                            Skills (FILLER) <br/>
                            - Python (Including PyTorch, FastAPI) <br/>
                            - Webdevelopment (React + Typescript) <br/>
                            - Japanese (JLPT N1)
                        </p>
                        <p className="text-lg font-light text-justify leading-[1.1] bg-gradient-to-b from-gray-700 to-transparent p-4 rounded-lg w-1/4 text-nowrap">
                            Languages (FILLER) <br/>
                            - German (Native) <br/>
                            - English (Fluent) <br/>
                            - Japanese (JLPT N1)
                        </p>
                    </div> */}
                </div>
            </div>
            {/* <div className="w-3/4 h-1 border-1 border-slate-300"/> */}
        </div>
)
}

export default Main;