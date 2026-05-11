import type { SkillsEntry } from "../../text/cvText";
import "./cvPage.css";


interface SkillsBlockProps {
    skillsEntry: SkillsEntry;
}
function SkillsBlock(props: SkillsBlockProps) {
    const { skillsEntry } = props;
    return (
            <div className="skills-block text-center items-center  border-2 rounded-lg py-3 px-2 flex flex-col items-center gap-2 h-fit w-full">
                <div className="flex justify-center items-center text-center w-full h-full">
                    <div className="flex flex-row flex-wrap gap-2 w-full h-full justify-center items-center">
                        {Array.from(skillsEntry.skills.entries()).map(([skillName, logoPath], index) => (
                            <div key={index} className="flex flex-col items-center gap-1 w-13 h-fit m-0 text-overflow-clip">
                                <img src={logoPath} alt={`${skillName} logo`} className="w-3/5" />
                                <span className="text-xs font-thin ">{skillName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default SkillsBlock;
