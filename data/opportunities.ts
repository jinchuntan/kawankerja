import type { Opportunity } from "@/lib/types";

export const DEFAULT_OPPORTUNITIES: Opportunity[] = [
  {
    id: "asean-digital-pathways-scholarship",
    title: "ASEAN Digital Pathways Scholarship",
    type: "Scholarship",
    provider: "FutureBridge Foundation",
    country: "Regional",
    location: "Online + regional bootcamp",
    language: "English",
    summary:
      "Prototype demo scholarship for ASEAN diploma and undergraduate learners interested in digital careers and applied tech skills.",
    description:
      "The ASEAN Digital Pathways Scholarship is a prototype demo listing that imagines a regional support program for low-income youth across Southeast Asia. It combines tuition support, a monthly connectivity stipend, and guided career mentoring for students learning data, design, or software foundations.",
    simplifiedSummary:
      "This demo scholarship helps ASEAN youth pay for digital learning and gives mentoring so they can move toward tech-related work.",
    eligibility: [
      "Open to ASEAN learners aged 17 to 25",
      "Priority for diploma or undergraduate students",
      "Interest in digital careers, data, or software foundations"
    ],
    deadline: "2026-04-18",
    actionLabel: "Open prototype details",
    actionUrl: "https://example.com/demo-scholarship",
    interests: ["Data and technology", "Design and creativity"],
    skills: ["Digital literacy", "Data analysis", "Communication"],
    educationLevels: ["Diploma", "Undergraduate"],
    tags: ["Prototype demo", "Regional"]
  },
  {
    id: "rural-talent-tvet-bursary",
    title: "Rural Talent TVET Bursary",
    type: "Scholarship",
    provider: "Nusantara Skills Fund",
    country: "Malaysia",
    location: "Malaysia",
    language: "English",
    summary:
      "Demo bursary supporting Malaysian rural youth pursuing TVET, applied business, and technical pathways.",
    description:
      "This prototype bursary is designed for Malaysian learners from rural or underserved communities who want to continue with TVET, diploma, or industry-linked training. The listing includes fee support, transport support, and a guided employability workshop series.",
    simplifiedSummary:
      "A demo bursary for Malaysian rural learners who want practical training and help entering work.",
    eligibility: [
      "Malaysian applicants from underserved or rural backgrounds",
      "Open to TVET, diploma, and foundation students",
      "Strong interest in applied skills or employability training"
    ],
    deadline: "2026-05-02",
    actionLabel: "Review demo bursary",
    actionUrl: "https://example.com/demo-bursary",
    interests: ["Skilled trades and TVET", "Business and entrepreneurship"],
    skills: ["Project coordination", "Digital literacy", "Problem solving"],
    educationLevels: ["Vocational / TVET", "Diploma", "Foundation / Pre-U"],
    tags: ["Prototype demo", "Malaysia"]
  },
  {
    id: "women-in-stem-microgrant",
    title: "Women in STEM Microgrant",
    type: "Scholarship",
    provider: "BrightSteps ASEAN Network",
    country: "Regional",
    location: "Remote-first",
    language: "English",
    summary:
      "Demo microgrant for young women exploring STEM, analytics, and green innovation in ASEAN communities.",
    description:
      "This prototype opportunity imagines a small but practical grant supporting women in ASEAN who want to join short STEM programs, buy learning materials, or complete community-based innovation projects. It is designed to feel accessible for first-generation applicants.",
    simplifiedSummary:
      "A small demo grant that helps young women start STEM learning or projects without a large cost barrier.",
    eligibility: [
      "Young women aged 16 to 26 in ASEAN countries",
      "Interest in STEM, analytics, sustainability, or innovation",
      "Open to school leavers, diploma learners, and undergraduates"
    ],
    deadline: "2026-06-10",
    actionLabel: "See demo grant",
    actionUrl: "https://example.com/demo-microgrant",
    interests: ["Data and technology", "Sustainability and climate"],
    skills: ["Data analysis", "Research", "Problem solving"],
    educationLevels: [
      "Secondary school",
      "Diploma",
      "Undergraduate",
      "Foundation / Pre-U"
    ],
    tags: ["Prototype demo", "Regional"]
  },
  {
    id: "data-career-starter-course",
    title: "Data Career Starter Course",
    type: "Course",
    provider: "LearnLoop ASEAN",
    country: "Regional",
    location: "Online",
    language: "English",
    summary:
      "A demo beginner course that introduces spreadsheets, dashboards, and basic analytics for first-time learners.",
    description:
      "The Data Career Starter Course is a prototype listing for youth who want an accessible entry point into data-related work. The course combines video lessons, practice tasks, and simple career guidance for internships or junior roles.",
    simplifiedSummary:
      "This demo course teaches the basics of data work so learners can prepare for entry-level digital jobs.",
    eligibility: [
      "Open to beginners with no previous analytics experience",
      "Useful for diploma, undergraduate, or TVET learners",
      "Learners should be ready for 4 to 6 hours of study per week"
    ],
    deadline: "2026-04-30",
    actionLabel: "Explore demo course",
    actionUrl: "https://example.com/demo-course-data",
    interests: ["Data and technology"],
    skills: ["Data analysis", "Digital literacy", "Communication"],
    educationLevels: ["Diploma", "Undergraduate", "Vocational / TVET"],
    tags: ["Prototype demo", "Regional"]
  },
  {
    id: "green-skills-bootcamp",
    title: "Green Skills Bootcamp",
    type: "Course",
    provider: "Petra Impact Lab",
    country: "Malaysia",
    location: "Hybrid in Kuala Lumpur + online",
    language: "English",
    summary:
      "Demo skills bootcamp for youth interested in sustainability projects, clean operations, and green reporting.",
    description:
      "This prototype bootcamp introduces practical sustainability concepts for young people entering green jobs. Learners build confidence with project basics, simple reporting tools, and community-focused climate problem solving.",
    simplifiedSummary:
      "A demo bootcamp that helps youth learn useful green skills for future jobs and community work.",
    eligibility: [
      "Open to Malaysian youth aged 18 to 27",
      "Suitable for diploma, undergraduate, and early jobseekers",
      "Interest in sustainability, community impact, or green operations"
    ],
    deadline: "2026-05-20",
    actionLabel: "Join demo bootcamp",
    actionUrl: "https://example.com/demo-course-green",
    interests: ["Sustainability and climate", "Community development"],
    skills: ["Project coordination", "Research", "Communication"],
    educationLevels: ["Diploma", "Undergraduate", "Graduate"],
    tags: ["Prototype demo", "Malaysia"]
  },
  {
    id: "creative-commerce-foundations",
    title: "Creative Commerce Foundations",
    type: "Course",
    provider: "Muda Studio School",
    country: "Indonesia",
    location: "Online",
    language: "English",
    summary:
      "Prototype online course for youth exploring design, digital marketing, and small business storytelling.",
    description:
      "Creative Commerce Foundations is a demo course that helps learners understand branding, basic design thinking, and digital promotion for entry-level creative work or freelance pathways.",
    simplifiedSummary:
      "This demo course helps creative learners build practical digital marketing and design basics.",
    eligibility: [
      "Open to learners aged 16 and above",
      "Suitable for school leavers, diploma students, and beginner freelancers",
      "No prior portfolio required"
    ],
    deadline: "2026-06-01",
    actionLabel: "View demo course",
    actionUrl: "https://example.com/demo-course-creative",
    interests: ["Design and creativity", "Business and entrepreneurship"],
    skills: ["Design tools", "Communication", "Project coordination"],
    educationLevels: [
      "Secondary school",
      "Diploma",
      "Undergraduate",
      "Foundation / Pre-U"
    ],
    tags: ["Prototype demo", "Indonesia"]
  },
  {
    id: "asean-civic-tech-fellowship",
    title: "ASEAN Civic Tech Fellowship",
    type: "Internship",
    provider: "OpenCities Youth Lab",
    country: "Regional",
    location: "Remote",
    language: "English",
    summary:
      "Demo remote internship for learners who want to support digital community projects and beginner research work.",
    description:
      "This prototype fellowship places youth into small civic technology projects where they can support outreach, user research, and simple digital operations. It is designed to feel achievable for students who have energy and curiosity, even if they are early in their journey.",
    simplifiedSummary:
      "A remote demo internship where learners help with digital community projects and learn by doing.",
    eligibility: [
      "Open to ASEAN learners and fresh graduates",
      "Good fit for communication, data, community, or research interests",
      "Can commit 10 to 15 hours per week for 8 weeks"
    ],
    deadline: "2026-04-25",
    actionLabel: "Read fellowship details",
    actionUrl: "https://example.com/demo-internship-civic",
    interests: ["Community development", "Data and technology"],
    skills: ["Research", "Communication", "Project coordination"],
    educationLevels: ["Diploma", "Undergraduate", "Graduate"],
    tags: ["Prototype demo", "Regional"]
  },
  {
    id: "community-operations-intern",
    title: "Community Operations Intern",
    type: "Internship",
    provider: "SkyBus Mobility",
    country: "Malaysia",
    location: "Selangor, Malaysia",
    language: "English",
    summary:
      "Prototype internship focused on support operations, service improvement, and youth-friendly customer workflows.",
    description:
      "The Community Operations Intern role is a demo listing that gives learners exposure to operations, digital support, and workflow improvement. It suits youth who enjoy solving problems, helping people, and learning how service teams run.",
    simplifiedSummary:
      "A demo internship for learners who want practical operations experience and people-facing problem solving.",
    eligibility: [
      "Open to diploma and undergraduate learners in Malaysia",
      "Interest in operations, customer experience, or service workflows",
      "Basic spreadsheet and communication confidence preferred"
    ],
    deadline: "2026-05-08",
    actionLabel: "See internship demo",
    actionUrl: "https://example.com/demo-internship-ops",
    interests: ["Business and entrepreneurship", "Community development"],
    skills: ["Communication", "Project coordination", "Digital literacy"],
    educationLevels: ["Diploma", "Undergraduate"],
    tags: ["Prototype demo", "Malaysia"]
  },
  {
    id: "junior-data-support-associate",
    title: "Junior Data Support Associate",
    type: "Job",
    provider: "Harapan Insights",
    country: "Singapore",
    location: "Hybrid in Singapore",
    language: "English",
    summary:
      "Demo entry-level job for learners with beginner analytics, spreadsheet, and reporting interests.",
    description:
      "This prototype job listing simulates an entry-level data support role where a young applicant helps prepare reports, clean basic datasets, and support simple dashboard tasks with mentoring from a senior team.",
    simplifiedSummary:
      "A starter job for someone who wants to turn early data skills into real work experience.",
    eligibility: [
      "Suitable for diploma graduates, final-year undergraduates, or fresh graduates",
      "Basic spreadsheet or analytics course experience is helpful",
      "Strong communication and willingness to learn are important"
    ],
    deadline: "2026-05-28",
    actionLabel: "Open demo job",
    actionUrl: "https://example.com/demo-job-data",
    interests: ["Data and technology"],
    skills: ["Data analysis", "Communication", "Digital literacy"],
    educationLevels: ["Diploma", "Undergraduate", "Graduate"],
    tags: ["Prototype demo", "Singapore"]
  },
  {
    id: "hospitality-graduate-associate",
    title: "Hospitality Graduate Associate",
    type: "Job",
    provider: "Mekar Stay Group",
    country: "Thailand",
    location: "Bangkok, Thailand",
    language: "English",
    summary:
      "Prototype graduate role for youth interested in hospitality, service operations, and customer experience.",
    description:
      "The Hospitality Graduate Associate is a demo listing showing how KawanKerja AI can surface customer-facing jobs as well as digital roles. The role blends operations, guest support, and problem resolution in a structured early-career program.",
    simplifiedSummary:
      "A demo graduate job for learners who enjoy service, teamwork, and organized operations.",
    eligibility: [
      "Open to diploma and undergraduate graduates",
      "Interest in hospitality, operations, or guest experience",
      "Good spoken communication and teamwork mindset"
    ],
    deadline: "2026-06-14",
    actionLabel: "View demo job",
    actionUrl: "https://example.com/demo-job-hospitality",
    interests: ["Hospitality and tourism", "Business and entrepreneurship"],
    skills: ["Communication", "Project coordination", "Problem solving"],
    educationLevels: ["Diploma", "Undergraduate", "Graduate"],
    tags: ["Prototype demo", "Thailand"]
  }
];

