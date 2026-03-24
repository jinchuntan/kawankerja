"use client";

import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { OpportunityGrid } from "@/components/opportunities/opportunity-grid";
import { ProfileSnapshot } from "@/components/profile/profile-snapshot";
import { useAppData } from "@/components/providers/app-data-provider";
import { getRecommendationsByType } from "@/lib/recommendations";

export default function DashboardPage() {
  const { isHydrated, opportunities, profile } = useAppData();

  if (!isHydrated) {
    return <div className="py-24 text-center text-slate-600">Loading your dashboard...</div>;
  }

  if (!profile) {
    return (
      <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8 text-center">
        <p className="badge">Profile needed</p>
        <h1 className="heading-font mt-4 text-4xl font-bold text-brand-ink">
          Let&apos;s build your first matches.
        </h1>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-700">
          Add a quick learner profile so KawanKerja AI can recommend scholarships,
          courses, internships, and jobs that feel relevant to your journey.
        </p>
        <Link
          className="mt-6 inline-flex rounded-full bg-brand-teal px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
          href="/onboarding"
        >
          Go to onboarding
        </Link>
      </div>
    );
  }

  const scholarshipMatches = getRecommendationsByType(opportunities, profile, "Scholarship");
  const courseMatches = getRecommendationsByType(opportunities, profile, "Course");
  const workMatches = [
    ...getRecommendationsByType(opportunities, profile, "Internship"),
    ...getRecommendationsByType(opportunities, profile, "Job")
  ].slice(0, 4);

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Dashboard"
        title={`Welcome back, ${profile.name || "friend"}`}
        description="Your recommendations update using your education level, interests, skills, and country preference."
      />

      <div className="grid gap-6 xl:grid-cols-[0.72fr_1fr]">
        <ProfileSnapshot profile={profile} />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-[1.75rem] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Matched now</p>
            <p className="mt-3 text-4xl font-bold text-brand-ink">
              {scholarshipMatches.length + courseMatches.length + workMatches.length}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Personalized demo listings ready to explore.
            </p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Profile focus</p>
            <p className="mt-3 text-xl font-bold text-brand-ink">{profile.educationLevel}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{profile.background} learner journey</p>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Next move</p>
            <p className="mt-3 text-xl font-bold text-brand-ink">Try the AI guide</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get quick help on skills, scholarships, or your first resume summary.
            </p>
          </div>
        </div>
      </div>

      <OpportunityGrid
        emptyMessage="No scholarship matches yet. Update your profile to explore more options."
        opportunities={scholarshipMatches}
        title="Recommended scholarships"
      />

      <OpportunityGrid
        emptyMessage="No course matches yet. Try adding more skill interests."
        opportunities={courseMatches}
        title="Recommended online courses"
      />

      <OpportunityGrid
        emptyMessage="No internships or jobs matched yet. Keep exploring new interests."
        opportunities={workMatches}
        title="Recommended internships and jobs"
      />
    </div>
  );
}
