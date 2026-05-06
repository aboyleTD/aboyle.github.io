import type { SkillsEntry } from "../../text/cvText";
import "./cvPage.css";


interface SkillsBlockProps {
    skillsEntry: SkillsEntry;
}
function SkillsBlock(props: SkillsBlockProps) {
    const { skillsEntry } = props;
    return (
        <div className="skills-block text-center items-center  border-2 rounded-lg p-3 pb-[2px]  flex flex-col items-center gap-2 h-fit">
            <span className="font-thin text-md description leading-[1.0] mb-[1px]">{skillsEntry.category}</span>
            <div className="flex justify-center items-center text-center w-full h-full">
                <div className="flex flex-row flex-wrap gap-2 w-full h-full justify-center items-center">
                    {Array.from(skillsEntry.skills.entries()).map(([skillName, logoPath], index) => (
                        <div key={index} className="flex flex-col items-center gap-1 w-11 h-fit m-0 text-overflow-clip">
                            <img src={logoPath} alt={`${skillName} logo`} className="w-8 h-8" />
                            <span className="text-xs font-thin  pb-1">{skillName}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsBlock;
