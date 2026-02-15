import {Subject} from "@/types";
import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
    STUDENT: "student",
    TEACHER: "teacher",
    ADMIN: "admin",
};

export const ROLE_OPTIONS = [
    {
        value: USER_ROLES.STUDENT,
        label: "Student",
        icon: GraduationCap,
    },
    {
        value: USER_ROLES.TEACHER,
        label: "Teacher",
        icon: School,
    },
];

export const DEPARTMENTS = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Economics",
    "Business Administration",
    "Engineering",
    "Psychology",
    "Sociology",
    "Political Science",
    "Philosophy",
    "Education",
    "Fine Arts",
    "Music",
    "Physical Education",
    "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
];


const getEnvVar = (key: string): string => {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

//export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
//export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");

export const BASE_URL =  import.meta.env.VITE_API_URL;
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

//export const CLOUDINARY_UPLOAD_PRESET = getEnvVar("VITE_CLOUDINARY_UPLOAD_PRESET");

export const teachers = [
    {
        id: "1",
        name: "John Doe",
    },
    {
        id: "2",
        name: "Jane Smith",
    },
    {
        id: "3",
        name: "Dr. Alan Turing",
    },
];

export const MOCK_SUBJECTS : Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "A foundational course covering the basics of programming and computer systems.",
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Mathematics",
        description: "Advanced calculus topics including integration techniques and series.",
    },
    {
        id: 3,
        code: "PHYS101",
        name: "General Physics I",
        department: "Physics",
        description: "Introduction to classical mechanics, including motion, forces, and energy.",
    },
    {
        id: 4,
        name: "Chemistry",
        code: "CHEM",
    },
    {
        id: 5,
        name: "Mathematics",
        code: "MATH",
    }
];