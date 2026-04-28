import HeaderBar from "./headerBar";
import Citation from "./auxiliary/citation";

import { bib } from "../text/bibliography";
import {BibEntry, parseBibFile} from "bibtex";

function Publications() {
    const parsed = parseBibFile(bib);
    const entries = parsed.content.filter((item): item is BibEntry => item.type !== "comment");
    const entryNames = entries.map(entry => entry._id);
    console.log("Parsed bibliography:", parsed);
    console.log("Bibliography entries:", entries);
    return (
        <div >
            <HeaderBar />
            <div className="w-2/3 justify-start items-start text-justify flex flex-col mx-auto">
            {entryNames.length >0 && 
            entryNames.map((entryName, index) => (
                <div key={index} className="mb-1 border-b border-gray-300 pb-4 w-full">
                    <Citation bibEntry={parsed.getEntry(entryName)} />
                </div>
            ))}
            </div>
        </div>
)
}

export default Publications;