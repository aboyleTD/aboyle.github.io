import HeaderBar from "../headerBar";
import { educationEntries, experienceEntries, programmingSkills, languageSkills } from "../../text/cvText";
import EducationRow from "./educationRow";
import SkillsBlock from "./skillsBlock";
import "./cvPage.css";

function cvPage() {

    // TODO improve colours overall esp. for light mode
    // TODO add logos for education and experience entries
    // TODO finish skills section 
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <HeaderBar />
             <div className="w-full flex  justify-center overflow-y-auto "> {/*{no-scrollbar} */}
                <div className="w-3/4 justify-start items-start text-start flex flex-col">
                    <div className="w-full flex flex-row">
                        <p className="font-thin w-1/4 text-3xl section-header">Education</p>
                        <div className="cell-container font-serif">
                            {educationEntries.map((entry, index) => (
                                <EducationRow key={index} entry={entry} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <p className="font-thin w-1/4 text-3xl section-header">Skills</p>
                        <div className="cell-container">
                            <p className="font-thin text-xl description mb-1">Technical Skills</p>
                            <div className="grid grid-cols-4 gap-3 gap-y-1">
                                {programmingSkills.map((skillsEntry, index) => (
                                    <div key={index} className="h-full flex items-center justify-center text-center gap-1 ">
                                        <span className="font-light text-lg text-center institution leading-[1.0] skills-category">{skillsEntry.category}</span>
                                    </div>
                                ))}
                                {programmingSkills.map((skillsEntry, index) => (
                                    <SkillsBlock key={index} skillsEntry={skillsEntry} />
                                ))}
                            </div>
                            <p className="font-thin text-xl description mb-1 mt-2">Language Skills</p>
                            {/* <p className="font-light text-sm description">German (Native), English (Native), Japanese (JLPT N1), French (Intermediate), Latin (Proficient) </p> */}
                            <div className="flex flex-row flex-wrap gap-x-3 gap-y-2">
                                {languageSkills.map((languageEntry, index) => (
                                    <div key={index} className="language-block text-center items-center border-2 rounded-lg p-2  flex flex-row justify-center gap-2 h-fit">
                                        <p className="font-light text-base description w-fit leading-[1.1] text-start">{languageEntry.language} <br/>
                                        <span className="font-light text-slate-500 text-sm">{languageEntry.proficiency}</span>
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
                        <p className="font-thin w-1/4 text-3xl section-header">Experience</p>
                        {/* TODO make text of description nicer (mainly colour) */}
                        <div className="cell-container font-serif">
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