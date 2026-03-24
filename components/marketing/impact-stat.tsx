type ImpactStatProps = {
  label: string;
  value: string;
  note: string;
};

export function ImpactStat({ label, value, note }: ImpactStatProps) {
  return (
    <article className="card-lift glass-panel rounded-[1.75rem] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="heading-font mt-4 text-5xl font-black text-brand-ink">{value}</p>
      <p className="mt-3 leading-7 text-slate-700">{note}</p>
    </article>
  );
}

