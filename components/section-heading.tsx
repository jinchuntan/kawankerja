type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-coral">{eyebrow}</p>
      <h2 className="heading-font text-3xl font-bold text-brand-ink md:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-700">{description}</p>
    </div>
  );
}

