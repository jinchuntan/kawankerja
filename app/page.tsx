import Link from "next/link";
import { FeatureCard } from "@/components/marketing/feature-card";
import { ImpactStat } from "@/components/marketing/impact-stat";
import { OutreachCard } from "@/components/marketing/outreach-card";
import { SectionHeading } from "@/components/section-heading";

const featureItems = [
  {
    title: "Smart matching",
    description:
      "Surface scholarships, courses, internships, and jobs that fit a young person's goals, skills, country, and education level."
  },
  {
    title: "Simple AI guidance",
    description:
      "Offer practical next-step advice in plain English, with a future-ready language selector for multilingual support across ASEAN."
  },
  {
    title: "Low-friction onboarding",
    description:
      "Capture only the essentials, then save a local learner profile so the prototype feels personal without needing sign-in."
  }
];

const impactStats = [
  {
    label: "Users reached",
    value: "1,284",
    note: "Students and jobseekers engaged through pilots and demo sessions."
  },
  {
    label: "Opportunities matched",
    value: "3,620",
    note: "Personalized recommendations generated using demo profile matching."
  },
  {
    label: "Applications supported",
    value: "486",
    note: "Mock guidance journeys completed for scholarships, jobs, and courses."
  }
];

const outreachItems = [
  {
    title: "School and community workshops",
    description:
      "Hands-on sessions in schools, youth centers, and rural learning hubs to show learners how to search and apply with confidence."
  },
  {
    title: "Student ambassadors",
    description:
      "Peer champions across campuses and TVET institutes helping classmates explore opportunities and share simple AI prompts."
  },
  {
    title: "Social media campaign",
    description:
      "Short-form guides, story-based testimonials, and local-language explainers designed to reach 1,000 people in the first phase."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6 fade-up">
          <span className="badge">Prototype for underserved ASEAN youth</span>
          <div className="space-y-4">
            <h1 className="heading-font max-w-3xl text-5xl font-black leading-tight text-brand-ink md:text-6xl">
              KawanKerja AI helps young people find real next steps, not dead ends.
            </h1>
            <p className="text-balance max-w-2xl text-lg leading-8 text-slate-700">
              A clean, mobile-ready prototype that matches ASEAN youth with scholarships,
              skills programs, internships, and jobs, then supports them with a
              multilingual AI guide built for clarity and confidence.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-brand-teal px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-ink"
              href="/onboarding"
            >
              Start your profile
            </Link>
            <Link
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-center font-semibold text-brand-ink transition hover:border-brand-teal hover:text-brand-teal"
              href="/dashboard"
            >
              View the dashboard
            </Link>
          </div>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-soft">
              <p className="text-2xl font-bold text-brand-ink">ASEAN-first</p>
              <p className="mt-1 text-sm text-slate-600">Built with local realities in mind</p>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-soft">
              <p className="text-2xl font-bold text-brand-ink">Mobile-ready</p>
              <p className="mt-1 text-sm text-slate-600">Responsive and accessible on smaller screens</p>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-soft">
              <p className="text-2xl font-bold text-brand-ink">AI-guided</p>
              <p className="mt-1 text-sm text-slate-600">Practical, friendly coaching for next actions</p>
            </div>
          </div>
        </div>

        <div className="hero-card glass-panel soft-grid fade-up rounded-[2rem] p-6 md:p-8">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-brand-teal/20 bg-brand-mint px-4 py-2 text-sm font-semibold text-brand-teal">
              Problem we are solving
            </div>
            <div className="space-y-4">
              <h2 className="heading-font text-3xl font-bold text-brand-ink">
                Too many young people face scattered information, language barriers, and low-trust career advice.
              </h2>
              <p className="leading-7 text-slate-700">
                KawanKerja AI brings verified-looking demo opportunities into one calm,
                simple place. Learners can discover what fits them, understand why it
                matters, and get support that feels approachable instead of overwhelming.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Built for
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-ink">
                  Scholarship seekers, TVET learners, first-job applicants
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Future support
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-ink">
                  English-first UI with ready language selector for ASEAN expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8" id="features">
        <SectionHeading
          eyebrow="Core features"
          title="Designed to guide, not overwhelm"
          description="Each step of the prototype helps a young person move from uncertainty toward a concrete opportunity."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-8" id="impact">
        <SectionHeading
          eyebrow="Impact snapshot"
          title="Demo metrics that show early traction"
          description="These sample indicators help stakeholders imagine how KawanKerja AI can support underserved learners at scale."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {impactStats.map((item) => (
            <ImpactStat key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-8" id="outreach">
        <SectionHeading
          eyebrow="Outreach plan"
          title="A practical path to reach 1,000 people"
          description="The prototype pairs digital discovery with local trust-building so it can travel beyond one website."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {outreachItems.map((item) => (
            <OutreachCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] px-6 py-8 md:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="badge">Prototype ready</p>
            <h2 className="heading-font text-3xl font-bold text-brand-ink">
              Start the flow and see personalized recommendations in minutes.
            </h2>
            <p className="leading-7 text-slate-700">
              Create a learner profile, explore dashboard matches, try the AI guide,
              and manage demo listings from the built-in admin page.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-brand-coral px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-ink"
              href="/assistant"
            >
              Open AI assistant
            </Link>
            <Link
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-brand-ink transition hover:border-brand-coral hover:text-brand-coral"
              href="/admin"
            >
              Manage demo data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

