"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { useAppData } from "@/components/providers/app-data-provider";
import { buildMatchExplanation } from "@/lib/recommendations";

export default function OpportunityDetailPage() {
  const params = useParams<{ id: string }>();
  const { isHydrated, opportunities, profile } = useAppData();
  const opportunity = opportunities.find((item) => item.id === params.id);

  if (!isHydrated) {
    return <div className="py-24 text-center text-slate-600">Loading opportunity details...</div>;
  }

  if (!opportunity) {
    return (
      <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8 text-center">
        <p className="badge">Not found</p>
        <h1 className="heading-font mt-4 text-4xl font-bold text-brand-ink">
          This demo opportunity is not available.
        </h1>
        <Link
          className="mt-6 inline-flex rounded-full bg-brand-teal px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
          href="/dashboard"
        >
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow={`${opportunity.type} details`}
        title={opportunity.title}
        description={`${opportunity.provider} • ${opportunity.country} • Prototype demo listing`}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
        <section className="glass-panel rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            <span className="badge">{opportunity.type}</span>
            <span className="badge">{opportunity.language}</span>
            <span className="badge">{opportunity.country}</span>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h2 className="heading-font text-2xl font-bold text-brand-ink">Full description</h2>
              <p className="mt-3 leading-8 text-slate-700">{opportunity.description}</p>
            </div>

            <div>
              <h2 className="heading-font text-2xl font-bold text-brand-ink">Simplified summary</h2>
              <p className="mt-3 rounded-[1.5rem] bg-brand-sand px-5 py-4 leading-7 text-slate-700">
                {opportunity.simplifiedSummary}
              </p>
            </div>

            <div>
              <h2 className="heading-font text-2xl font-bold text-brand-ink">Eligibility</h2>
              <ul className="mt-3 space-y-3 text-slate-700">
                {opportunity.eligibility.map((item) => (
                  <li className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-5">
          <div className="glass-panel rounded-[2rem] p-6">
            <h2 className="heading-font text-2xl font-bold text-brand-ink">Why this matches you</h2>
            <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
              {buildMatchExplanation(opportunity, profile)}
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-6">
            <h2 className="heading-font text-2xl font-bold text-brand-ink">At a glance</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Deadline</p>
                <p>{opportunity.deadline}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p>{opportunity.location}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Interest tags</p>
                <p>{opportunity.interests.join(", ")}</p>
              </div>
            </div>

            <a
              className="mt-6 inline-flex w-full justify-center rounded-full bg-brand-coral px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
              href={opportunity.actionUrl}
              rel="noreferrer"
              target="_blank"
            >
              {opportunity.actionLabel}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

