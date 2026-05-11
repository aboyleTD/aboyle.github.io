import type { EducationEntry } from "../../text/cvText";
import "./cvPage.css";
import { getLanguage } from "../../services/settings";
import { localizeString, getLocalizedMonth, getLocalizedLocation, supervisor } from "../../text/cvText";
interface EducationRowProps {
    entry: EducationEntry;
}
function EducationRow(props : EducationRowProps) {
    const { entry } = props;
    const language = getLanguage();
    const AbbreviateDate = (dateString: string) : string => {
        const [month, year] = dateString.split(" ");
        const monthAbbr = getLocalizedMonth(month, language).slice(0,3);
        const yearAbbr = year + (language === "jp" ? "年" : "");
        if (language === "jp") {
            return `${yearAbbr}${monthAbbr}`;
        }
        return `${monthAbbr}, ${yearAbbr}`;
    }
    const startDate = AbbreviateDate(entry.startDate);
    const endDate = AbbreviateDate(entry.endDate);
    // const supervisorPreamble = entry.supervisors && entry.supervisors.length > 1 ? "Supervisors:" : "Supervisor:";
    const supervisorPreamble = localizeString(supervisor, language);
    const hasSupervisors = entry.supervisors && entry.supervisors.length > 0;

    return (
        <div className="flex flex-row mb-2">
            <div className="flex flex-col w-1/4 mt-2 date font-sans">
                <p className="font-light text-sm leading-none leading-none">{startDate} ー <span className="text-nowrap">{endDate}</span></p>
                <p className="font-light text-sm leading-[1.1] mt-[1px]">{getLocalizedLocation(entry.location, language)}</p>
            </div>
            <div className="flex flex-col w-3/4 ml-2 gap-[1px]">
                <p className="font-normal leading-none text-lg institution mb-[1px] font-serif">{localizeString(entry.institution, language)}</p>
                {entry.description && <p className={"font-light  leading-none text-sm " + (hasSupervisors ? "description" : "description-isolated")}>{localizeString(entry.description, language)}</p>}
                {entry.supervisors && <p className="font-light text-sm leading-none">{supervisorPreamble} {entry.supervisors.map(s => localizeString(s, language)).join(", ")}</p>}
            </div>
        </div>
    )
}

export default EducationRow;