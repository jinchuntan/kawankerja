import Link from "next/link";
import type { UserProfile } from "@/lib/types";

type ProfileSnapshotProps = {
  profile: UserProfile;
};

export function ProfileSnapshot({ profile }: ProfileSnapshotProps) {
  return (
    <section className="glass-panel rounded-[2rem] p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Learner profile</p>
          <h2 className="heading-font mt-3 text-3xl font-bold text-brand-ink">{profile.name}</h2>
          <p className="mt-2 text-slate-600">
            {profile.country} • {profile.educationLevel} • {profile.languagePreference}
          </p>
        </div>
        <Link
          className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:border-brand-teal hover:text-brand-teal"
          href="/onboarding"
        >
          Edit profile
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-slate-500">Career interests</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.careerInterests.map((item) => (
              <span className="rounded-full bg-brand-mint px-3 py-2 text-sm font-semibold text-brand-teal" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-500">Skills of interest</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.skillsOfInterest.map((item) => (
              <span className="rounded-full bg-brand-sand px-3 py-2 text-sm font-semibold text-brand-ink" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-white/80 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Background context</p>
        <p className="mt-1 leading-6">
          This learner is from a {profile.background.toLowerCase()} background and may benefit from clear
          guidance, low-data browsing, and opportunities with remote-friendly or affordable pathways.
        </p>
      </div>
    </section>
  );
}
