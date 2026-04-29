export interface EducationEntry {
    description: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    logoPath?: string;
    supervisors?: string[];
}

const bachelorDegree : EducationEntry = {
    description: "Bsc Computer Science",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    startDate: "September 2020",
    endDate: "August 2023",
}

const masterDegree : EducationEntry = {
    description: "Msc Computer Science Majoring in Machine Intelligence",
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

export const educationEntries : EducationEntry[] = [bachelorDegree, masterDegree, exchangeSemester, mastersThesis].reverse();


