import { getTopRecommendations } from "@/lib/recommendations";
import type { Opportunity, UserProfile } from "@/lib/types";

export function generateMockResponse(
  prompt: string,
  profile: UserProfile | null,
  opportunities: Opportunity[]
) {
  const lowerPrompt = prompt.toLowerCase();
  const topMatches = profile ? getTopRecommendations(opportunities, profile, 3) : [];

  if (lowerPrompt.includes("scholarship")) {
    const scholarships = opportunities
      .filter((item) => item.type === "Scholarship")
      .slice(0, 2)
      .map((item) => `- ${item.title}: ${item.summary}`);

    return [
      `Here are two scholarship-style demo matches${profile ? ` for a ${profile.educationLevel.toLowerCase()} learner in ${profile.country}` : ""}:`,
      ...scholarships,
      "",
      "Focus on checking the education level, country fit, and deadline first. If you want, I can also help you write a simple motivation statement."
    ].join("\n");
  }

  if (lowerPrompt.includes("skill") || lowerPrompt.includes("data job")) {
    const learnerContext = profile
      ? `Based on your interest in ${profile.careerInterests[0] ?? "career growth"}, I would start with these skills:`
      : "For an entry-level data job, I would start with these skills:";

    return [
      learnerContext,
      "- Spreadsheet confidence and clean data entry",
      "- Basic charts, dashboards, and simple analysis",
      "- Clear written communication",
      "- Problem solving and asking good questions",
      "",
      "A smart next step is to take one beginner data course and build one small practice project."
    ].join("\n");
  }

  if (lowerPrompt.includes("resume")) {
    const sampleName = profile?.name || "a motivated learner";
    const sampleInterest = profile?.careerInterests[0] || "entry-level digital work";
    const sampleSkill = profile?.skillsOfInterest[0] || "communication";

    return `You can try this simple resume summary:\n\n"${sampleName} is a motivated early-career candidate interested in ${sampleInterest.toLowerCase()}. They are building strength in ${sampleSkill.toLowerCase()} and are eager to contribute, learn quickly, and grow through real work experience."`;
  }

  if (topMatches.length > 0) {
    return [
      "I found a few demo options that may suit you right now:",
      ...topMatches.map((item) => `- ${item.title} in ${item.country} (${item.type})`),
      "",
      "Tell me whether you want help with scholarships, courses, jobs, or a resume summary, and I will keep the advice simple."
    ].join("\n");
  }

  return "I can help with scholarships, courses, internships, jobs, or simple career steps. Add a learner profile for more personalized demo guidance.";
}

