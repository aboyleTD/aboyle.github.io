import HeaderBar from "../headerBar";
import { educationEntries, experienceEntries } from "./cvText";
import EducationRow from "./educationRow";
import "./cvPage.css";

function cvPage() {

    return (
        <div>
            <HeaderBar />
            <div className="w-3/4 justify-start items-start text-start flex flex-col mx-auto overflow-y-auto">
                <div className="w-full flex flex-row">
                    <p className="font-thin w-1/4 text-3xl section-header">Education</p>
                    <div className="cell-container">
                        {educationEntries.map((entry, index) => (
                            <EducationRow key={index} entry={entry} />
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-row">
                    <p className="font-thin w-1/4 text-3xl section-header">Skills</p>
                    <div className="cell-container">
                        <p className="font-thin text-xl description">Programming</p>
                        <p className="font-light text-sm institution">Python, Java, C++, TypeScript (React), Haskell, OCaml, PostgreSQL</p>
                        <p className="font-thin text-xl description">Languages</p>
                        <p className="font-light text-sm institution">German (Native), English (Native), Japanese (JLPT N1), French (Intermediate) </p>
                    </div>
                </div>
                <div className="w-full flex flex-row">
                    <p className="font-thin w-1/4 text-3xl section-header">Experience</p>
                    <div className="cell-container">
                        {experienceEntries.map((entry, index) => (
                            <EducationRow key={index} entry={entry} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
)
}

export default cvPage;