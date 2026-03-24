import type { EducationLevel } from "@/lib/types";

export const COUNTRY_OPTIONS = [
  "Malaysia",
  "Singapore",
  "Indonesia",
  "Thailand",
  "Philippines",
  "Vietnam",
  "Brunei",
  "Cambodia",
  "Laos",
  "Myanmar"
] as const;

export const LANGUAGE_OPTIONS = [
  "English",
  "Bahasa Melayu",
  "Bahasa Indonesia",
  "Filipino",
  "Thai",
  "Vietnamese"
] as const;

export const EDUCATION_LEVEL_OPTIONS: EducationLevel[] = [
  "Secondary school",
  "Foundation / Pre-U",
  "Diploma",
  "Vocational / TVET",
  "Undergraduate",
  "Graduate"
];

export const BACKGROUND_OPTIONS = ["Urban", "Rural", "Peri-urban"] as const;

export const CAREER_INTEREST_OPTIONS = [
  "Data and technology",
  "Design and creativity",
  "Business and entrepreneurship",
  "Community development",
  "Sustainability and climate",
  "Hospitality and tourism",
  "Skilled trades and TVET"
] as const;

export const SKILL_OPTIONS = [
  "Digital literacy",
  "Data analysis",
  "Communication",
  "Design tools",
  "Project coordination",
  "Research",
  "Problem solving"
] as const;

