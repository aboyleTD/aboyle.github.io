import pythonLogo from "../assets/logos/python.png";
import pytorchLogo from "../assets/logos/pytorch.png";
import tensorflowLogo from "../assets/logos/tensorflow.png";
import reactLogo from "../assets/logos/react.png";
import tsLogo from "../assets/logos/typescript.png";
import postgresLogo from "../assets/logos/postgressql.png";
import kubernetesLogo from "../assets/logos/kubernetes.png";
import javaLogo from "../assets/logos/java.png";
import cppLogo from "../assets/logos/cpp.png";
import cLogo from "../assets/logos/c.png";
import x86Logo from "../assets/logos/x86.png";
import haskellLogo from "../assets/logos/haskell.png";
import ocamlLogo from "../assets/logos/ocaml.png";
import romeIcon from "../assets/logos/rome.png";
// import tailwindLogo from "../assets/logos/tailwind.png";
export interface LocalizedString {
    en: string;
    jp?: string;
}
export interface EducationEntry {
    description: LocalizedString;
    institution?: LocalizedString;
    location: string;
    startDate: string;
    endDate: string;
    logoPath?: string;
    supervisors?: LocalizedString[];
}

export interface SkillsEntry {
    category: string;
    skills: Map<string, string>; // Skill name to logo path
}

export interface LanguageEntry {
    language: LocalizedString;
    proficiency: LocalizedString;
    icons: string[]; // Paths to icons representing the language or unicode characters for the flag
}

const bachelorDegree : EducationEntry = {
    description: {en: "BSc Computer Science", jp: "コンピュータサイエンス学士"},
    institution: {en: "ETH Zurich", jp: "ETHチューリッヒ"},
    location: "Zurich, Switzerland",
    startDate: "September 2020",
    endDate: "August 2023",
}

const masterDegree : EducationEntry = {
    description: {en : "MSc Computer Science Majoring in Machine Intelligence", jp : "コンピュータサイエンス修士（機械知能専攻）"},
    institution: {en: "ETH Zurich", jp: "ETHチューリッヒ"},
    location: "Zurich, Switzerland",
    startDate: "September 2023",
    endDate: "January 2026",
}

const exchangeSemester : EducationEntry = {
    description: {en: "Exchange Semester", jp: "交換留学"},
    institution: {en: "University of Tokyo", jp: "東京大学"},
    location: "Tokyo, Japan",
    startDate: "October 2023",
    endDate: "February 2024",
    supervisors: [{en: "Miyao Lab", jp: "宮尾研究室"}],
}

const mastersThesis : EducationEntry = {
    description: {en:"Master's Thesis", jp: "修士論文"},
    institution: {en:"University of Tokyo", jp: "東京大学"},
    location: "Tokyo, Japan",
    startDate: "March 2025",
    endDate: "November 2025",
    supervisors: [{en: "IVIA Lab", jp: "IVIA研究室"}, {en: "Miyao Lab", jp: "宮尾研究室"}],
}

const gifuExchange : EducationEntry = {
    description: {en: "Exchange Semester", jp: "交換留学"},
    institution: {en: "Gifu Technical High School", jp: "岐阜工業高等学校"},
    location: "Gifu, Japan",
    startDate: "April 2018",
    endDate: "August 2018",
}

const waiter : EducationEntry = {
    description: {en:"Kitchen staff and waiter", jp: "接客とキッチンスタッフ"},
    institution: {en:"Kanarimo", jp:"カナリモ"},
    location: "Tokyo, Japan",
    startDate: "August 2025",
    endDate: "November 2025",
}
export const educationEntries : EducationEntry[] = [mastersThesis, exchangeSemester, masterDegree, bachelorDegree];

export const experienceEntries : EducationEntry[] = [waiter, gifuExchange];

const dataScienceSkills : SkillsEntry = {
    category: "Data Science",
    skills: new Map<string, string>([
        ["Python", pythonLogo],
        ["PyTorch", pytorchLogo],
        ["TensorFlow", tensorflowLogo],
    ]),
};

const webDevSkills : SkillsEntry = {
    category: "Web Development",
    skills: new Map<string, string>([
        ["React", reactLogo ],
        ["TypeScript", tsLogo],
        // ["Tailwind CSS", tailwindLogo],
        ["SQL", postgresLogo],
        ["K8s", kubernetesLogo],
    ]),
};

const programmingLanguagesSkills : SkillsEntry = {
    category: "Systems and OOP",
    skills: new Map<string, string>([
        ["Java", javaLogo],
        ["C++", cppLogo],
        ["C", cLogo],
        ["x86", x86Logo],
    ]),
};

const functionalProgrammingSkills : SkillsEntry = {
    category: "Functional ",
    skills: new Map<string, string>([
        ["Haskell", haskellLogo],
        ["OCaml", ocamlLogo],
    ]),
};

export const programmingSkills : SkillsEntry[] = [dataScienceSkills, webDevSkills, programmingLanguagesSkills, functionalProgrammingSkills];

const germanLanguage : LanguageEntry = {
    language: { en: "German", jp: "ドイツ語" },
    proficiency: { en: "Native", jp: "ネイティブ" },
    icons: ["🇩🇪", "🇨🇭"],
};

const englishLanguage : LanguageEntry = {
    language: { en: "English", jp: "英語" },
    proficiency: { en: "Native", jp: "ネイティブ" },
    icons: ["🇮🇪"],
};

const japaneseLanguage : LanguageEntry = {
    language: { en: "Japanese", jp: "日本語" },
    proficiency: { en: "JLPT N1", jp: "JLPT N1" },
    icons: ["🇯🇵"],
};

const frenchLanguage : LanguageEntry = {
    language: { en: "French", jp: "フランス語" },
    proficiency: { en: "Intermediate", jp: "中級" },
    icons: ["🇫🇷"],
};

const latinLanguage : LanguageEntry = {
    language: { en: "Latin", jp: "ラテン語" },
    proficiency: { en: "Proficient", jp: "熟練" },
    icons: [romeIcon],
};

export const languageSkills : LanguageEntry[] = [germanLanguage, englishLanguage, japaneseLanguage, frenchLanguage, latinLanguage];


const monthMap: { [key: string]: string } = {
        "january": "一月",
        "february": "二月",
        "march": "三月",
        "april": "四月",
        "may": "五月",
        "june": "六月",
        "july": "七月",
        "august": "八月",
        "september": "九月",
        "october": "十月",
        "november": "十一月",
        "december": "十二月",
    };
export const getLocalizedMonth = (month: string, language: string): string => {
    if (language === "jp") {
        return monthMap[month.toLowerCase()] ?? month;
    }
    return month;
}

const locationMap: { [key: string]: string } = {
    "Zurich, Switzerland": "スイス、チューリッヒ",
    "Tokyo, Japan": "日本、東京",
    "Gifu, Japan": "日本、岐阜",
};

export const getLocalizedLocation = (location: string, language: string): string => {
    if (language === "jp") {
        return locationMap[location] ?? location;
    }
    return location;
};

export const localizeString = (localizedString: LocalizedString, language: string): string => {
    if (language === "jp" && localizedString.jp) {
        return localizedString.jp;
    }
    return localizedString.en;
}
export const supervisor :LocalizedString = {
    en: "Supervisor: ",
    jp: "指導教員: ",
};
const educationHeader: LocalizedString = {
    en: "Education",
    jp: "学歴",
};

const skillsHeader: LocalizedString = {
    en: "Skills",
    jp: "スキル",
};

const experienceHeader: LocalizedString = {
    en: "Experience",
    jp: "経験",
};

export const sectionHeaders : { [key: string]: LocalizedString } = {
    education: educationHeader,
    skills: skillsHeader,
    experience: experienceHeader,
};

const languageSkillsHeader: LocalizedString = {
    en: "Language Skills",
    jp: "言語",
};

const technicalSkillsHeader: LocalizedString = {
    en: "Technical Skills",
    jp: "技術",
};

export const skillsSectionHeaders : { [key: string]: LocalizedString } = {
    languageSkills: languageSkillsHeader,
    technicalSkills: technicalSkillsHeader,
};