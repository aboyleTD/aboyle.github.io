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

export interface EducationEntry {
    description: string;
    institution?: string;
    location: string;
    startDate: string;
    endDate: string;
    logoPath?: string;
    supervisors?: string[];
}

export interface SkillsEntry {
    category: string;
    skills: Map<string, string>; // Skill name to logo path
}

export interface LanguageEntry {
    language: string;
    proficiency: string;
    icons: string[]; // Paths to icons representing the language or unicode characters for the flag
}

const bachelorDegree : EducationEntry = {
    description: "BSc Computer Science",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    startDate: "September 2020",
    endDate: "August 2023",
}

const masterDegree : EducationEntry = {
    description: "MSc Computer Science Majoring in Machine Intelligence",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    startDate: "September 2023",
    endDate: "January 2026",
}

const exchangeSemester : EducationEntry = {
    description: "Exchange Semester",
    institution: "University of Tokyo",
    location: "Tokyo, Japan",
    startDate: "October 2023",
    endDate: "February 2024",
    supervisors: ["Miyao Lab"],
}

const mastersThesis : EducationEntry = {
    description: "Master's Thesis",
    institution: "University of Tokyo",
    location: "Tokyo, Japan",
    startDate: "March 2025",
    endDate: "November 2025",
    supervisors: ["IVIA Lab", "Miyao Lab"],
}

const gifuExchange : EducationEntry = {
    description: "Exchange Semester",
    institution: "岐阜工業高等学校 (Gifu Technical High School)",
    location: "Gifu, Japan",
    startDate: "April 2018",
    endDate: "August 2018",
}

const waiter : EducationEntry = {
    description: "Kitchen staff and waiter",
    institution: "Kanarimo",
    location: "Tokyo, Japan",
    startDate: "August 2025",
    endDate: "November 2025",
}
export const educationEntries : EducationEntry[] = [bachelorDegree, masterDegree, exchangeSemester, mastersThesis].reverse();

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
    language: "German",
    proficiency: "Native",
    icons: ["🇩🇪", "🇨🇭"],
};

const englishLanguage : LanguageEntry = {
    language: "English",
    proficiency: "Native",
    icons: ["🇮🇪"],
};

const japaneseLanguage : LanguageEntry = {
    language: "Japanese",
    proficiency: "JLPT N1",
    icons: ["🇯🇵"],
};

const frenchLanguage : LanguageEntry = {
    language: "French",
    proficiency: "Intermediate",
    icons: ["🇫🇷"],
};

const latinLanguage : LanguageEntry = {
    language: "Latin",
    proficiency: "Proficient",
    icons: [romeIcon],
};

export const languageSkills : LanguageEntry[] = [germanLanguage, englishLanguage, japaneseLanguage, frenchLanguage, latinLanguage];