type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="card-lift glass-panel rounded-[1.75rem] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-lg font-black text-brand-teal">
        {title.slice(0, 1)}
      </div>
      <h3 className="heading-font mt-5 text-2xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
    </article>
  );
}

