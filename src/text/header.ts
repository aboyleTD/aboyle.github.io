export interface HeaderText {
    name: string;
    about: string;
    publications: string;
    cv: string;
}

const englishHeader : HeaderText = {
    name: "Alan Boyle",
    about: "About",
    publications: "Publications",
    cv: "CV",
}

const japaneseHeader : HeaderText = {
    name: "ボイル・アラン",
    about: "概要",
    publications: "研究業績",
    cv: "履歴書",
}

export function getHeaderText(language: string): HeaderText {
    switch (language) {
        case "en":
            return englishHeader;
        case "jp":
            return japaneseHeader;
        default:
            return englishHeader;
    }
}

