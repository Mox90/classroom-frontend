import {Subject} from "@/types";

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
];