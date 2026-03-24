type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl space-y-4 fade-up">
      <p className="badge">{eyebrow}</p>
      <h1 className="heading-font text-4xl font-black leading-tight text-brand-ink md:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-700">{description}</p>
    </div>
  );
}

