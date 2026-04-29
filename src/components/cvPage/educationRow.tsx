import type { EducationEntry } from "./cvText";
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
        return `${monthAbbr} ${yearAbbr}`;
    }
    const startDate = AbbreviateDate(entry.startDate);
    const endDate = AbbreviateDate(entry.endDate);
    const supervisorPreamble = entry.supervisors && entry.supervisors.length > 1 ? "Supervisors:" : "Supervisor:";

    return (
        <div className="flex flex-row mb-2">
            <div className="flex flex-col w-1/4 mt-2">
                <p className="font-light text-sm">{startDate} - {endDate}</p>
                <p className="font-light text-sm">{entry.location}</p>
            </div>
            <div className="flex flex-col w-3/4">
                <p className="font-normal text-lg description">{entry.description}</p>
                <p className="font-light text-sm institution">{entry.institution}</p>
                {entry.supervisors && <p className="font-light text-sm">{supervisorPreamble} {entry.supervisors.join(", ")}</p>}
            </div>
        </div>
    )
}

export default EducationRow;