"use client";

import { FormEvent, useState } from "react";
import { PageIntro } from "@/components/layout/page-intro";
import { useAppData } from "@/components/providers/app-data-provider";
import { generateMockResponse } from "@/lib/mock-ai";
import type { ChatMessage } from "@/lib/types";

const examplePrompts = [
  "What scholarships fit a diploma student in Malaysia?",
  "What skills should I learn for an entry-level data job?",
  "Help me write a simple resume summary."
];

export default function AssistantPage() {
  const { isHydrated, opportunities, profile } = useAppData();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello. I am your KawanKerja AI guide. I can help you explore scholarships, courses, internships, jobs, and simple next steps."
    }
  ]);

  if (!isHydrated) {
    return <div className="py-24 text-center text-slate-600">Loading the AI guidance assistant...</div>;
  }

  const sendMessage = (prompt: string) => {
    const cleanPrompt = prompt.trim();

    if (!cleanPrompt) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: cleanPrompt
    };

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now() + 1}`,
      role: "assistant",
      content: generateMockResponse(cleanPrompt, profile, opportunities)
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="AI guidance assistant"
        title="Ask simple questions and get simple next steps"
        description="This prototype uses mock AI responses so you can demo the guidance experience even without a live API connection."
      />

      <div className="grid gap-6 xl:grid-cols-[0.68fr_1fr]">
        <aside className="space-y-4">
          <div className="glass-panel rounded-[2rem] p-6">
            <h2 className="heading-font text-2xl font-bold text-brand-ink">Example prompts</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with one of these demo prompts, then ask your own question.
            </p>
            <div className="mt-5 space-y-3">
              {examplePrompts.map((prompt) => (
                <button
                  className="w-full rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium leading-6 text-slate-700 transition hover:border-brand-teal hover:text-brand-teal"
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  type="button"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-coral/20 bg-brand-coral/10 p-6">
            <h3 className="text-lg font-bold text-brand-ink">Guidance note</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              AI suggestions are for guidance only. Users should still verify deadlines,
              eligibility, and application details before taking action.
            </p>
          </div>
        </aside>

        <section className="glass-panel flex min-h-[620px] flex-col rounded-[2rem]">
          <div className="border-b border-slate-200 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Chat</p>
            <h2 className="heading-font mt-2 text-2xl font-bold text-brand-ink">
              Personalized support in plain English
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {profile
                ? `Responses are tailored using ${profile.country}, ${profile.educationLevel}, and your selected interests.`
                : "Add a profile for more personalized responses."}
            </p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {messages.map((message) => (
              <div
                className={`max-w-[85%] rounded-[1.5rem] px-4 py-3 text-sm leading-7 ${
                  message.role === "assistant"
                    ? "bg-white text-slate-700 shadow-soft"
                    : "ml-auto bg-brand-teal text-white"
                }`}
                key={message.id}
              >
                <p className="font-semibold">
                  {message.role === "assistant" ? "KawanKerja AI" : "You"}
                </p>
                <p className="mt-1 whitespace-pre-line">{message.content}</p>
              </div>
            ))}
          </div>

          <form className="border-t border-slate-200 px-6 py-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-brand-teal"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about scholarships, skills, or resume help"
                value={input}
              />
              <button
                className="rounded-full bg-brand-teal px-6 py-3 font-semibold text-white transition hover:bg-brand-ink"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

