"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { useAppData } from "@/components/providers/app-data-provider";
import {
  BACKGROUND_OPTIONS,
  CAREER_INTEREST_OPTIONS,
  COUNTRY_OPTIONS,
  EDUCATION_LEVEL_OPTIONS,
  LANGUAGE_OPTIONS,
  SKILL_OPTIONS
} from "@/lib/constants";
import type { UserProfile } from "@/lib/types";

export default function OnboardingPage() {
  const router = useRouter();
  const { profile, setProfile, isHydrated } = useAppData();
  const [form, setForm] = useState<UserProfile>(
    profile ?? {
      name: "",
      country: "Malaysia",
      educationLevel: "Diploma",
      languagePreference: "English",
      careerInterests: ["Data and technology"],
      skillsOfInterest: ["Digital literacy"],
      background: "Rural"
    }
  );

  useEffect(() => {
    if (profile) {
      setForm(profile);
    }
  }, [profile]);

  if (!isHydrated) {
    return <div className="py-24 text-center text-slate-600">Loading your learner profile...</div>;
  }

  const toggleValue = (key: "careerInterests" | "skillsOfInterest", value: string) => {
    const list = form[key];
    const exists = list.includes(value);
    const nextValues = exists ? list.filter((item) => item !== value) : [...list, value];

    setForm({
      ...form,
      [key]: nextValues
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const safeProfile = {
      ...form,
      name: form.name.trim() || "Friend"
    };

    setProfile(safeProfile);
    router.push("/dashboard");
  };

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Step 1"
        title="Create a learner profile"
        description="This quick form stores your profile locally on this device so the prototype can tailor recommendations and AI guidance."
      />

      <form
        className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-6 md:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Name</span>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Aisyah Rahman"
              value={form.name}
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Country</span>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
              onChange={(event) => setForm({ ...form, country: event.target.value })}
              value={form.country}
            >
              {COUNTRY_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Education level</span>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
              onChange={(event) =>
                setForm({ ...form, educationLevel: event.target.value as UserProfile["educationLevel"] })
              }
              value={form.educationLevel}
            >
              {EDUCATION_LEVEL_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Language preference</span>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
              onChange={(event) => setForm({ ...form, languagePreference: event.target.value })}
              value={form.languagePreference}
            >
              {LANGUAGE_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-slate-700">Career interests</legend>
            <div className="flex flex-wrap gap-3">
              {CAREER_INTEREST_OPTIONS.map((item) => {
                const selected = form.careerInterests.includes(item);
                return (
                  <button
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-brand-teal text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-brand-teal hover:text-brand-teal"
                    }`}
                    key={item}
                    onClick={() => toggleValue("careerInterests", item)}
                    type="button"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-slate-700">Skills of interest</legend>
            <div className="flex flex-wrap gap-3">
              {SKILL_OPTIONS.map((item) => {
                const selected = form.skillsOfInterest.includes(item);
                return (
                  <button
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-brand-coral text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-brand-coral hover:text-brand-coral"
                    }`}
                    key={item}
                    onClick={() => toggleValue("skillsOfInterest", item)}
                    type="button"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="mt-8">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Urban/rural background</span>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal md:max-w-sm"
              onChange={(event) =>
                setForm({ ...form, background: event.target.value as UserProfile["background"] })
              }
              value={form.background}
            >
              {BACKGROUND_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] bg-brand-sky/50 p-5 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-6">
            Prototype note: this profile is saved only in your browser. You can edit it later by returning to this page.
          </p>
          <button
            className="rounded-full bg-brand-teal px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
            type="submit"
          >
            Save profile and continue
          </button>
        </div>
      </form>
    </div>
  );
}
