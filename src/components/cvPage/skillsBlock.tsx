import type { SkillsEntry } from "../../text/cvText";
import "./cvPage.css";


interface SkillsBlockProps {
    skillsEntry: SkillsEntry;
}
function SkillsBlock(props: SkillsBlockProps) {
    const { skillsEntry } = props;
    return (
            <div className="skills-block text-center items-center  border-2 rounded-lg py-3 px-5 flex flex-col items-center gap-2 h-fit">
                <div className="flex flex-row flex-wrap gap-4 w-full h-full justify-center items-center">
                    {Array.from(skillsEntry.skills.entries()).map(([skillName, logoPath], index) => (
                        <div key={index} className="flex flex-col items-center gap-1 w-1/4 min-w-8 w-2/5 text-overflow-clip">
                            <img src={logoPath} alt={`${skillName} logo`} className="w-full" />
                            <span className="text-[11px] font-thin leading-none">{skillName}</span>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default SkillsBlock;
