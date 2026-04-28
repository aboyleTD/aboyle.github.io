import HeaderBar from "./headerBar";
import Citation from "./auxiliary/citation";

import { bib, links } from "../text/bibliography";
import {BibEntry, parseBibFile} from "bibtex";

function Publications() {
    const parsed = parseBibFile(bib);
    const entries = parsed.content.filter((item): item is BibEntry => item.type !== "comment");
    const entryNames = entries.map(entry => entry._id);
    return (
        <div >
            <HeaderBar />
            <div className="w-2/3 justify-start items-start text-start flex flex-col mx-auto">
            {entryNames.length >0 && 
            entryNames.map((entryName, index) => (
                <div key={index} className="w-full flex flex-col">
                    <div className="pb-2 w-full">
                        <Citation bibEntry={parsed.getEntry(entryName)} linkMap={links[index]} />
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-gray-600 to-transparent mb-2 w-full"/>
                </div>
            ))}
            </div>
        </div>
)
}

export default Publications;