import HeaderBar from "../headerBar";
import { educationEntries } from "./cvText";
import EducationRow from "./educationRow";
import "./cvPage.css";

function cvPage() {

    return (
        <div>
            <HeaderBar />
            <div className="w-3/4 justify-start items-start text-start flex flex-col mx-auto">
            <div className="w-full flex flex-row">
                <p className="font-thin w-1/4 text-3xl section-header">Education</p>
                <div className="flex flex-col ml-4 mb-4 border-2 border-slate-700 bg-slate-800 rounded-md p-4 w-full h-fit">
                    {educationEntries.map((entry, index) => (
                        <EducationRow key={index} entry={entry} />
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-row">
                <p className="font-thin w-1/4 text-3xl section-header">Skills</p>
                <div className="flex flex-col ml-4 mb-4 border-2 border-slate-700 bg-slate-800 rounded-md p-4 w-full h-fit">
                    <p className="font-extralight text-lg description">Programming</p>
                    <p className="font-light text-sm institution">Python, Java, C++, React, </p>
                </div>
            </div>
            </div>
        </div>
)
}

export default cvPage;