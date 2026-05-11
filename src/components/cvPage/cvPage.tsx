import HeaderBar from "../headerBar";
import { educationEntries, 
    experienceEntries, 
    programmingSkills, 
    languageSkills, 
    sectionHeaders,
    skillsSectionHeaders,
    localizeString,
     type LocalizedString } from "../../text/cvText";
import EducationRow from "./educationRow";
import SkillsBlock from "./skillsBlock";
import { FaRegFilePdf } from "react-icons/fa6";
import IconButton from "../auxiliary/IconButton";
import "./cvPage.css";
import CV from "../../assets/pdfs/cv.pdf";
import { getLanguage } from "../../services/settings";

function cvPage() {
    const language = getLanguage();
    const fixedLocatilization = (text: LocalizedString) => {
        return localizeString(text, language);
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
                                <EducationRow key={index} entry={entry} />
                            ))}
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
                            <p className="font-thin text-xl description mb-2">{fixedLocatilization(skillsSectionHeaders.technicalSkills)}</p>
                            <div className="grid grid-cols-4 gap-3 gap-y-[8px]"> 
                                {programmingSkills.map((skillsEntry, index) => (
                                    <div key={index} className="h-full flex items-center justify-center text-center gap-1 ">
                                        <span className="font-extralight text-lg text-center institution leading-[1.0] skills-category">{skillsEntry.category}</span>
                                    </div>
                                ))}
                                {programmingSkills.map((skillsEntry, index) => (
                                    <SkillsBlock key={index} skillsEntry={skillsEntry} />
                                ))}
                            </div>
                            <p className="font-thin text-xl description mb-2 mt-5">{fixedLocatilization(skillsSectionHeaders.languageSkills)}</p>
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
                            {experienceEntries.map((entry, index) => (
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