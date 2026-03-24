import type { Opportunity, OpportunityType, UserProfile } from "@/lib/types";

function scoreOpportunity(opportunity: Opportunity, profile: UserProfile) {
  let score = 0;

  if (opportunity.educationLevels.includes(profile.educationLevel)) {
    score += 4;
  }

  if (opportunity.country === profile.country || opportunity.country === "Regional") {
    score += 3;
  }

  if (opportunity.language === profile.languagePreference || opportunity.language === "English") {
    score += 1;
  }

  for (const interest of profile.careerInterests) {
    if (opportunity.interests.includes(interest)) {
      score += 3;
    }
  }

  for (const skill of profile.skillsOfInterest) {
    if (opportunity.skills.includes(skill)) {
      score += 2;
    }
  }

  if (profile.background !== "Urban" && opportunity.location.toLowerCase().includes("online")) {
    score += 1;
  }

  return score;
}

export function getTopRecommendations(
  opportunities: Opportunity[],
  profile: UserProfile,
  limit = 6
) {
  return [...opportunities]
    .sort((first, second) => scoreOpportunity(second, profile) - scoreOpportunity(first, profile))
    .slice(0, limit);
}

export function getRecommendationsByType(
  opportunities: Opportunity[],
  profile: UserProfile,
  type: OpportunityType
) {
  return getTopRecommendations(
    opportunities.filter((item) => item.type === type),
    profile,
    4
  );
}

export function buildMatchExplanation(
  opportunity: Opportunity,
  profile: UserProfile | null
) {
  if (!profile) {
    return "Create a learner profile to see a more specific match explanation.";
  }

  const matchedInterests = opportunity.interests.filter((item) =>
    profile.careerInterests.includes(item)
  );
  const matchedSkills = opportunity.skills.filter((item) =>
    profile.skillsOfInterest.includes(item)
  );

  const reasons = [
    `This opportunity fits your ${profile.educationLevel.toLowerCase()} background.`,
    opportunity.country === "Regional" || opportunity.country === profile.country
      ? `It is available for ${opportunity.country === "Regional" ? "ASEAN-wide" : profile.country} applicants.`
      : `It may still be relevant if you are open to opportunities outside ${profile.country}.`
  ];

  if (matchedInterests.length > 0) {
    reasons.push(`It matches your interests in ${matchedInterests.join(", ").toLowerCase()}.`);
  }

  if (matchedSkills.length > 0) {
    reasons.push(`It supports skills you want to grow, such as ${matchedSkills.join(", ").toLowerCase()}.`);
  }

  if (profile.background !== "Urban") {
    reasons.push(
      "Because your background may involve extra access barriers, the simple summary and guided next steps can make this option easier to compare."
    );
  }

  return reasons.join("\n\n");
}

