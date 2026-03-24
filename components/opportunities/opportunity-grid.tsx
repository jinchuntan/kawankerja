import { OpportunityCard } from "@/components/opportunities/opportunity-card";
import { SectionHeading } from "@/components/section-heading";
import type { Opportunity } from "@/lib/types";

type OpportunityGridProps = {
  title: string;
  opportunities: Opportunity[];
  emptyMessage: string;
};

export function OpportunityGrid({
  title,
  opportunities,
  emptyMessage
}: OpportunityGridProps) {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Personalized picks"
        title={title}
        description="Generated from demo data using your local learner profile."
      />

      {opportunities.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-[1.75rem] p-6 text-slate-700">{emptyMessage}</div>
      )}
    </section>
  );
}

