import { useState } from "react";
import HeaderBar from "../headerBar";
import { educationEntries, 
    GPAs,
    GPAheader,
    workExperience, 
    otherExperience,
    programmingSkills, 
    languageSkills, 
    sectionHeaders,
    sectionSubHeaders,
    localizeString,
     type LocalizedString } from "../../text/cvText";
import EducationRow from "./educationRow";
import SkillsBlock from "./skillsBlock";
import { FaRegFilePdf } from "react-icons/fa6";
import {FaChevronUp, FaChevronDown, FaChevronRight } from "react-icons/fa";
import IconButton from "../auxiliary/IconButton";
import "./cvPage.css";
import CV_en from "../../assets/pdfs/cv.pdf";
import CV_jp from "../../assets/pdfs/cv_jp.pdf";
import { getLanguage } from "../../services/settings";

function cvPage() {
    const language = getLanguage();
    const CV = language === "jp" ? CV_jp : CV_en;
    const [showGPA, setShowGPA] = useState<boolean>(false);
    const [showEducationIndex, setShowEducationIndex] = useState<number>(4);
    const fixedLocatilization = (text: LocalizedString) => {
        return localizeString(text, language);
    }
    

    const toggleEducationIndex = () => {
        if (showEducationIndex === educationEntries.length) {
            setShowEducationIndex(4);
        } else {
            setShowEducationIndex(educationEntries.length);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <HeaderBar />
             <div className="w-full flex  justify-center overflow-y-auto  relative"> {/*{no-scrollbar} */}
                <div className="w-3/4 justify-start items-start text-start flex flex-col">
                    <div className="w-full flex flex-row relative">
                        <p className="font-thin w-1/4 text-3xl section-header">{fixedLocatilization(sectionHeaders.education)}</p>
                        <div className="cell-container">
                            {educationEntries.map((entry, index) => (
                                <>
                                {index < showEducationIndex && <EducationRow key={index} entry={entry} />}
                                </>
                            ))}
                            <div className="w-full items-center justify-center flex">
                                <IconButton style={"Inline-bg"} onClick={toggleEducationIndex}>
                                    {showEducationIndex == 4 ? <FaChevronDown className="text-sm font-thin"/> : <FaChevronUp className="text-sm"/>}
                                </IconButton>
                            </div>
                            <div className="mt-4 w-full">
                                <div className="flex flex-row items-center gap-1 leading-none mb-1">
                                    <span className="institution font-thin text-xl ">{fixedLocatilization(GPAheader)}</span>
                                    <IconButton style="Inline" onClick={() => setShowGPA(!showGPA)}>
                                        {showGPA ? <FaChevronDown className="text-sm font-thin"/> : <FaChevronRight className="text-sm"/>}
                                    </IconButton>  
                                </div>
                                {showGPA && <div className="grid grid-cols-7 gap-y-1 w-full">
                                    <p className="font-light text-sm description col-span-2">Degree</p>
                                    <p className="font-light text-sm description">GPA</p>
                                    <p className="font-light text-sm description">Max</p>
                                    <p className="font-light text-sm description">Min</p>
                                    <p className="font-light text-sm description">Passing</p>
                                    <p className="font-light text-sm description">Cohort Mean</p>
                                    {GPAs.map((gpaEntry) => (
                                        <>
                                            <p className="font-md text-sm  w-fit col-span-2 mr-2">{(gpaEntry.degree)}</p>
                                            <p className="font-light text-sm ">{gpaEntry.gpa}</p>
                                            <p className="font-light text-sm ">{gpaEntry.max}</p>
                                            <p className="font-light text-sm ">{gpaEntry.min}</p>
                                            <p className="font-light text-sm ">{gpaEntry.passing}</p>
                                            <p className="font-light text-sm ">{gpaEntry.mean ? `${gpaEntry.mean}±${gpaEntry.std}` : "-"}</p>
                                        </>
                                    ))}
                                </div>}
                            </div>
                        </div>
                        <div className="absolute top-0 md:right-[-70px] right-[-50px] justify-center items-center flex-col gap-1 text-center">
                            <IconButton style="SideBar" onClick={() => window.open(CV, "_blank")}>
                                <FaRegFilePdf className="text-4xl " />
                            </IconButton>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <p className="font-thin w-1/4 text-3xl section-header">{fixedLocatilization(sectionHeaders.skills)}</p>
                        <div className="cell-container">
                            <p className="font-thin text-xl description mb-2">{fixedLocatilization(sectionSubHeaders.technicalSkills)}</p>
                            <div className="grid grid-cols-4 gap-3 gap-y-[8px]"> 
                                {programmingSkills.map((skillsEntry, index) => (
                                    <div key={index} className="h-full flex items-center justify-center text-center gap-1 ">
                                        <span className="font-extralight text-lg text-center institution leading-[1.0] skills-category">{fixedLocatilization(skillsEntry.category)}</span>
                                    </div>
                                ))}
                                {programmingSkills.map((skillsEntry, index) => (
                                    <SkillsBlock key={index} skillsEntry={skillsEntry} />
                                ))}
                            </div>
                            <p className="font-thin text-xl description mb-2 mt-5">{fixedLocatilization(sectionSubHeaders.languageSkills)}</p>
                            {/* <p className="font-light text-sm description">German (Native), English (Native), Japanese (JLPT N1), French (Intermediate), Latin (Proficient) </p> */}
                            <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
                                {languageSkills.map((languageEntry, index) => (
                                    <div key={index} className="language-block text-center items-center border-2 rounded-lg p-2  flex flex-row justify-center gap-2 h-fit">
                                        <p className="font-light text-base description w-fit leading-[1.1] text-start">{localizeString(languageEntry.language, language)} <br/>
                                        <span className="font-light text-slate-400 text-sm">{localizeString(languageEntry.proficiency, language)}</span>
                                        </p>
                                        <div className="flex flex-row flex-wrap justify-center">
                                            {languageEntry.icons.map((icon, iconIndex) => icon.includes("/") ?
                                            (<img key={iconIndex} src={icon} className="h-5"/>)
                                             : (
                                                <span key={iconIndex} className="leading-none text-xl">{icon}</span>
                                            ) )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <p className="font-thin w-1/4 text-3xl section-header">{fixedLocatilization(sectionHeaders.experience)}</p>
                        {/* TODO make text of description nicer (mainly colour) */}
                        <div className="cell-container ">
                            <p className="font-thin text-xl description ">{fixedLocatilization(sectionSubHeaders.workExperience)}</p>
                            {workExperience.map((entry, index) => (
                                <EducationRow key={index} entry={entry} />
                            ))}
                            <p className="font-thin text-xl description mt-2">{fixedLocatilization(sectionSubHeaders.otherExperience)}</p>
                            {otherExperience.map((entry, index) => (
                                <EducationRow key={index} entry={entry} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default cvPage;