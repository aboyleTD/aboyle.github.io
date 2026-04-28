import {BibEntry} from "bibtex";
import type { JSX } from "react";


interface CitationProps {
    bibEntry : BibEntry;
}


function Citation(props: CitationProps) {
    const bibEntry = props.bibEntry;
    
    const handleWrapperStringField = (field : any) : string[] => {
        switch (field.type) {
            case "quotedstringwrapper":
                return field.data[0].data;
            case "bracedstringwrapper":
                return field.data;
        }
    }
    const handleTitle = (data: string[], rowType: string, URL?: string) : JSX.Element => {
        console.log("Handling title field:", data);
        const isBookTitle = rowType === "booktitle";
        const handleOnClick = URL ? () => window.open(URL, "_blank") : undefined;
        return (
            <p style={isBookTitle ? {  fontStyle: "italic" } : { color : "white", fontWeight: "bold"}} onClick={handleOnClick}>{data.join(" ")}</p>
        )
    }
    const handleAuthors = (field : any) : JSX.Element => {
        const authors = field.authors$;
        const lastIndex = authors.length - 1;
        return (
            <span className="inline">
                {authors.map((author: any, index: number) => (
                   <>
                   {author.firstNames$[0] == "Alan" ? <strong key={index} style={index == 0 ? { textDecoration: "underline", fontWeight: "bold" } : { }}>{author.firstNames$.join(" ")} {author.lastNames$.join("")}</strong> : <>{index == lastIndex ? " and " : ""}{author.firstNames$.join(" ")} {author.lastNames$.join("")}</>}{index < lastIndex ? ", " : ""}
                   </>
                ))}

            </span>        )
    }
    const fieldToHtml = (field: any, rowType: string, URL?: string): JSX.Element => {
        if (field === undefined) {
            return (<></>);
        }
        console.log("Field type:", field.type);
        switch (rowType) {
            case "authors":
                return handleAuthors(field);
            case "title":
            case "booktitle":
                return handleTitle(handleWrapperStringField(field), rowType, URL);
            default:
                return <p>{field.toString()}</p>;
        }
    }

    const URL = handleWrapperStringField(bibEntry.getField("url")).join("");
    console.log("URL field:", URL);
    console.log("Rendering citation for entry:", bibEntry);

    return (
        <div className="flex flex-col gap-0 items-start justify-start">
            {fieldToHtml(bibEntry.getField("title"), "title", URL)} <br />
            {fieldToHtml(bibEntry.getField("author"), "authors")} <br />
            {fieldToHtml(bibEntry.getField("booktitle"), "booktitle")}
        </div>
    );
}

export default Citation;