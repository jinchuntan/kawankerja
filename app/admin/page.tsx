"use client";

import { FormEvent, useState } from "react";
import { PageIntro } from "@/components/layout/page-intro";
import { useAppData } from "@/components/providers/app-data-provider";
import {
  CAREER_INTEREST_OPTIONS,
  COUNTRY_OPTIONS,
  EDUCATION_LEVEL_OPTIONS,
  LANGUAGE_OPTIONS,
  SKILL_OPTIONS
} from "@/lib/constants";
import { createOpportunityId } from "@/lib/utils";
import type { Opportunity, OpportunityType } from "@/lib/types";

const emptyForm: Omit<Opportunity, "id"> = {
  actionLabel: "View prototype details",
  actionUrl: "https://example.com/demo",
  country: "Malaysia",
  deadline: "2026-06-30",
  description: "",
  educationLevels: ["Diploma"],
  eligibility: ["Open to prototype applicants"],
  interests: ["Data and technology"],
  language: "English",
  location: "Hybrid",
  provider: "Demo provider",
  simplifiedSummary: "",
  skills: ["Digital literacy"],
  summary: "",
  tags: ["Prototype demo"],
  title: "",
  type: "Scholarship"
};

const ADMIN_COUNTRY_OPTIONS = [...COUNTRY_OPTIONS, "Regional"];

export default function AdminPage() {
  const { isHydrated, opportunities, addOpportunity, updateOpportunity } = useAppData();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Opportunity, "id">>(emptyForm);

  if (!isHydrated) {
    return <div className="py-24 text-center text-slate-600">Loading admin tools...</div>;
  }

  const selectedOpportunity = opportunities.find((item) => item.id === selectedId);

  const setFromExisting = (item: Opportunity) => {
    setSelectedId(item.id);
    setForm({
      actionLabel: item.actionLabel,
      actionUrl: item.actionUrl,
      country: item.country,
      deadline: item.deadline,
      description: item.description,
      educationLevels: item.educationLevels,
      eligibility: item.eligibility,
      interests: item.interests,
      language: item.language,
      location: item.location,
      provider: item.provider,
      simplifiedSummary: item.simplifiedSummary,
      skills: item.skills,
      summary: item.summary,
      tags: item.tags,
      title: item.title,
      type: item.type
    });
  };

  const resetForm = () => {
    setSelectedId(null);
    setForm(emptyForm);
  };

  const toggleArrayValue = (
    key: "educationLevels" | "interests" | "skills",
    value: string
  ) => {
    const currentValues = form[key] as string[];
    const exists = currentValues.includes(value);
    const nextValues = exists
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setForm({
      ...form,
      [key]: nextValues
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedOpportunity: Opportunity = {
      id: selectedId ?? createOpportunityId(form.title),
      ...form,
      eligibility: form.eligibility.filter(Boolean),
      interests: form.interests.filter(Boolean),
      skills: form.skills.filter(Boolean),
      summary: form.summary || form.description.slice(0, 120),
      simplifiedSummary: form.simplifiedSummary || form.summary || form.description.slice(0, 150),
      tags: ["Prototype demo"]
    };

    if (selectedId) {
      updateOpportunity(selectedId, normalizedOpportunity);
    } else {
      addOpportunity(normalizedOpportunity);
    }

    resetForm();
  };

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Admin"
        title="Manage prototype opportunity listings"
        description="This page edits local demo data only. Nothing is connected to a production backend."
      />

      <div className="grid gap-6 xl:grid-cols-[0.72fr_1fr]">
        <aside className="glass-panel rounded-[2rem] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="heading-font text-2xl font-bold text-brand-ink">Existing listings</h2>
              <p className="mt-1 text-sm text-slate-600">
                Choose one to edit or create a fresh demo record.
              </p>
            </div>
            <button
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand-teal hover:text-brand-teal"
              onClick={resetForm}
              type="button"
            >
              New listing
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {opportunities.map((item) => (
              <button
                className={`w-full rounded-[1.4rem] border px-4 py-4 text-left transition ${
                  selectedOpportunity?.id === item.id
                    ? "border-brand-teal bg-brand-mint/70"
                    : "border-slate-200 bg-white hover:border-brand-teal"
                }`}
                key={item.id}
                onClick={() => setFromExisting(item)}
                type="button"
              >
                <p className="font-semibold text-brand-ink">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {item.type} • {item.country} • {item.deadline}
                </p>
              </button>
            ))}
          </div>
        </aside>

        <form className="glass-panel rounded-[2rem] p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Title</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                placeholder="ASEAN Digital Pathways Scholarship"
                value={form.title}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Type</span>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) =>
                  setForm({ ...form, type: event.target.value as OpportunityType })
                }
                value={form.type}
              >
                {["Scholarship", "Course", "Internship", "Job"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Country</span>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, country: event.target.value })}
                value={form.country}
              >
                {ADMIN_COUNTRY_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Deadline</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, deadline: event.target.value })}
                type="date"
                value={form.deadline}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Language</span>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, language: event.target.value })}
                value={form.language}
              >
                {LANGUAGE_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Provider</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, provider: event.target.value })}
                value={form.provider}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Location</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                value={form.location}
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Summary</span>
              <textarea
                className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, summary: event.target.value })}
                value={form.summary}
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Description</span>
              <textarea
                className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                value={form.description}
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Eligibility</span>
              <textarea
                className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) =>
                  setForm({
                    ...form,
                    eligibility: event.target.value
                      .split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  })
                }
                placeholder="One eligibility point per line"
                value={form.eligibility.join("\n")}
              />
            </label>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold text-slate-700">Education levels</legend>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_LEVEL_OPTIONS.map((item) => {
                  const selected = form.educationLevels.includes(item);
                  return (
                    <button
                      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                        selected
                          ? "bg-brand-teal text-white"
                          : "border border-slate-200 bg-white text-slate-700"
                      }`}
                      key={item}
                      onClick={() => toggleArrayValue("educationLevels", item)}
                      type="button"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold text-slate-700">Career interests</legend>
              <div className="flex flex-wrap gap-2">
                {CAREER_INTEREST_OPTIONS.map((item) => {
                  const selected = form.interests.includes(item);
                  return (
                    <button
                      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                        selected
                          ? "bg-brand-coral text-white"
                          : "border border-slate-200 bg-white text-slate-700"
                      }`}
                      key={item}
                      onClick={() => toggleArrayValue("interests", item)}
                      type="button"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold text-slate-700">Skills</legend>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((item) => {
                  const selected = form.skills.includes(item);
                  return (
                    <button
                      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                        selected
                          ? "bg-brand-gold text-brand-ink"
                          : "border border-slate-200 bg-white text-slate-700"
                      }`}
                      key={item}
                      onClick={() => toggleArrayValue("skills", item)}
                      type="button"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] bg-brand-sky/40 p-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-700">
              This admin view stores changes in local browser storage only. Refreshing in another browser will show the original seeded demo data.
            </p>
            <button
              className="rounded-full bg-brand-teal px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
              type="submit"
            >
              {selectedId ? "Update listing" : "Add listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
