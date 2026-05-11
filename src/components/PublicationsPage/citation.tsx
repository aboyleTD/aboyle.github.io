import {BibEntry} from "bibtex";
import type { JSX } from "react";
import "./citation.css";


interface CitationProps {
    bibEntry : BibEntry | undefined;
    linkMap: Map<string, string>;
}


function Citation(props: CitationProps) {
    const bibEntry = props.bibEntry;
    if (!bibEntry) {
        return <div>Invalid Bib Entry</div>;
    }
    const linkMap = props.linkMap;

    const handleWrapperStringField = (field : any) : string[] => {
        let data: string[] = [];
        switch (field.type) {
            case "quotedstringwrapper":
                data = field.data[0].data;
                break;
            case "bracedstringwrapper":
                data = field.data;
                break;
            default:
                data = field.data;
        }
        return data;
    }
    const handleTitle = (field: any, URL?: string) : JSX.Element => {
        const data = handleWrapperStringField(field);
        const style = " leading-none " + (URL ? " cursor-pointer text-lg title" : "");
        return (
            <a className={`${style}`} href={URL} target="_blank">{data.join(" ")}</a>
        )
    }
    const handleBookTitle = (field : any, year : string) : JSX.Element => {
        const data = handleWrapperStringField(field);
        const bookTitle = data.join(" ");
        // TODO set up clean table for converting book title to venue shorthand 
        let venue = "";
        if (bookTitle.includes("Empirical")) {
            venue = "EMNLP";
        } else if (bookTitle.includes("VIS")) {
            venue = "IEEE VIS";
        }
        venue += " " + year.slice(2,4);
        return (
            <p className=" inline">
                <span className=" border-1 rounded-md px-1 py-[2px] mr-2 border-slate-300 w-fit text-nowrap leading-none font-light text-xs booktitle-abbr">{venue}</span>
                <span className="italic leading-none font-thin">{bookTitle}</span>
            </p>
        )
    }
    const handleAuthors = (field : any) : JSX.Element => {
        const authors = field.authors$;
        const lastIndex = authors.length - 1;
        return (
            <p className="inline leading-none author font-light">
                {authors.map((author: any, index: number) => (
                   <>
                   {author.firstNames$[0] == "Alan" ? <span key={index} className="font-normal underline" >{author.firstNames$.map((name: string, index : number) => index == 0 ? name : name[0].charAt(0)+".").join(" ")} {author.lastNames$.join("")}</span> : <>{index == lastIndex ? " and " : ""}{author.firstNames$.join(" ")} {author.lastNames$.join("")}</>}{index < lastIndex ? ", " : ""}
                   </>
                ))}

            </p>        )
    }

    const URL = handleWrapperStringField(bibEntry.getField("url")).join("");
    const date = String(handleWrapperStringField(bibEntry.getField("year"))[0]);

    return (
        <div className="flex flex-col items-start justify-start w-full h-fit">
            <div className="flex flex-row justify-between w-full">
                {handleTitle(bibEntry.getField("title"), URL)}
                <p className="date leading-none font-thin text-3xl">{date}</p>
            </div>
            <div className="mt-[-7px] w-5/6 h-fit">
                {handleAuthors(bibEntry.getField("author"))} <br/>
                {handleBookTitle(bibEntry.getField("booktitle"), date)}
                <div className="mt-2 h-fit flex flex-row gap-2">
                {Array.from(linkMap.entries()).map(([label, url]) => (
                    <a key={label} href={url} target="_blank" className="border-1 px-2 text-sm rounded-md hover:invert hover:scale-105 transition duration-200 ease-in-out">
                        {label}
                    </a>
                ))}
            </div>
            </div>
            
        </div>
    );
}

export default Citation;