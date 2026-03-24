type OutreachCardProps = {
  title: string;
  description: string;
};

export function OutreachCard({ title, description }: OutreachCardProps) {
  return (
    <article className="card-lift rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-coral">Reach plan</p>
      <h3 className="heading-font mt-4 text-2xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
    </article>
  );
}

