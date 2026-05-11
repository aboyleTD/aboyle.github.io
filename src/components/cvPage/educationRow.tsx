import type { EducationEntry } from "../../text/cvText";
import "./cvPage.css";
interface EducationRowProps {
    entry: EducationEntry;
}
function EducationRow(props : EducationRowProps) {
    const { entry } = props;
    const AbbreviateDate = (dateString: string) : string => {
        const [month, year] = dateString.split(" ");
        const monthAbbr = month.slice(0,3);
        const yearAbbr = year; 
        return `${monthAbbr}, ${yearAbbr}`;
    }
    const startDate = AbbreviateDate(entry.startDate);
    const endDate = AbbreviateDate(entry.endDate);
    // const supervisorPreamble = entry.supervisors && entry.supervisors.length > 1 ? "Supervisors:" : "Supervisor:";
    const supervisorPreamble = "Supervision: ";
    const hasSupervisors = entry.supervisors && entry.supervisors.length > 0;

    return (
        <div className="flex flex-row mb-2">
            <div className="flex flex-col w-1/4 mt-2 date font-sans">
                <p className="font-light text-sm leading-none ">{startDate} - {endDate}</p>
                <p className="font-light text-sm leading-none">{entry.location}</p>
            </div>
            <div className="flex flex-col w-3/4 ml-2 gap-[1px]">
                <p className="font-normal leading-none text-lg institution mb-[1px] font-serif">{entry.institution}</p>
                {entry.description && <p className={"font-light  leading-none text-sm " + (hasSupervisors ? "description" : "description-isolated")}>{entry.description}</p>}
                {entry.supervisors && <p className="font-light text-sm leading-none">{supervisorPreamble} {entry.supervisors.join(", ")}</p>}
            </div>
        </div>
    )
}

export default EducationRow;