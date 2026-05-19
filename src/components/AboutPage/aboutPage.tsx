import HeaderBar from "../headerBar";
import { profileLinks } from "../../text/links";
import { FaGithub } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

import { getAboutMe, getSelfImg } from "../../text/about";

import "../main.css";



function AboutMe() {

    const aboutMe = getAboutMe();
    const selfImg = getSelfImg();

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <HeaderBar/>
            <div className="w-3/4 ">
                <div className="flex flex-row items-start justify-start">

                    <div className="flex flex-col gap-1 items-start w-3/4">
                        <span className="text-2xl title font-serif">About Me</span>
                        <div className="text-lg font-light text-justify text-wrap  leading-[1.1] whitespace-pre-wrap pr-6 w-full">
                            {aboutMe}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/4 max-w-[230px]">
                        <img className=" rounded-full border-1" src={selfImg} alt="Self.jpg" />
                        <div className="flex flex-row mt-2 gap-2 text-3xl">
                            <a className="" href={`mailto:${profileLinks.email}`} target="_blank"><HiOutlineMail /></a>
                            <a className="" href={profileLinks.github} target="_blank"><FaGithub /></a>
                            <a className="" href={profileLinks.googleScholar} target="_blank"><SiGooglescholar /></a>
                            <a className="" href={profileLinks.linkedin} target="_blank"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default AboutMe;