import Link from "next/link";
import type { Opportunity } from "@/lib/types";

type OpportunityCardProps = {
  opportunity: Opportunity;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <article className="card-lift glass-panel flex h-full flex-col rounded-[1.75rem] p-5">
      <div className="flex flex-wrap gap-2">
        <span className="badge">{opportunity.type}</span>
        <span className="badge">{opportunity.country}</span>
      </div>

      <div className="mt-5 flex-1">
        <h3 className="heading-font text-2xl font-bold text-brand-ink">{opportunity.title}</h3>
        <p className="mt-2 text-sm font-medium text-slate-500">{opportunity.provider}</p>
        <p className="mt-4 leading-7 text-slate-700">{opportunity.summary}</p>
      </div>

      <div className="mt-5 space-y-3 rounded-[1.4rem] bg-white/80 p-4 text-sm text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">Eligibility</p>
          <p>{opportunity.eligibility[0]}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Deadline</p>
          <p>{opportunity.deadline}</p>
        </div>
      </div>

      <Link
        className="mt-5 inline-flex justify-center rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-ink"
        href={`/opportunities/${opportunity.id}`}
      >
        View details
      </Link>
    </article>
  );
}

