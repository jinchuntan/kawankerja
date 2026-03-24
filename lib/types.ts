export type OpportunityType = "Scholarship" | "Course" | "Internship" | "Job";

export type EducationLevel =
  | "Secondary school"
  | "Foundation / Pre-U"
  | "Diploma"
  | "Vocational / TVET"
  | "Undergraduate"
  | "Graduate";

export type UserProfile = {
  name: string;
  country: string;
  educationLevel: EducationLevel;
  languagePreference: string;
  careerInterests: string[];
  skillsOfInterest: string[];
  background: "Urban" | "Rural" | "Peri-urban";
};

export type Opportunity = {
  id: string;
  title: string;
  type: OpportunityType;
  provider: string;
  country: string;
  location: string;
  language: string;
  summary: string;
  description: string;
  simplifiedSummary: string;
  eligibility: string[];
  deadline: string;
  actionLabel: string;
  actionUrl: string;
  interests: string[];
  skills: string[];
  educationLevels: EducationLevel[];
  tags: string[];
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

