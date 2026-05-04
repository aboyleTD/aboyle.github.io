export interface EducationEntry {
    description: string;
    institution?: string;
    location: string;
    startDate: string;
    endDate: string;
    logoPath?: string;
    supervisors?: string[];
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


