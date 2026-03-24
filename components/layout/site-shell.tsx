"use client";

import { BrandLogo } from "@/components/layout/brand-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGE_OPTIONS } from "@/lib/constants";
import { useAppData } from "@/components/providers/app-data-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/assistant", label: "AI Assistant" },
  { href: "/admin", label: "Admin" }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isHydrated, selectedLanguage, setSelectedLanguage } = useAppData();

  return (
    <div className="page-shell min-h-screen">
      <header className="sticky top-0 z-30 border-b border-white/40 bg-[#fbf8f2]/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <Link className="flex items-center" href="/">
                <BrandLogo priority />
              </Link>

              <div className="rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-slate-600 lg:hidden">
                English default
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <nav className="flex flex-wrap gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "bg-brand-ink text-white"
                          : "bg-white/70 text-slate-700 hover:bg-brand-mint hover:text-brand-teal"
                      }`}
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <label className="hidden items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 lg:flex">
                <span className="font-semibold">Language</span>
                <select
                  className="bg-transparent outline-none"
                  disabled={!isHydrated}
                  onChange={(event) => setSelectedLanguage(event.target.value)}
                  value={selectedLanguage}
                >
                  {LANGUAGE_OPTIONS.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-white/80 bg-white/65 px-4 py-3 text-sm text-slate-600">
            <p className="leading-6">
              English is the current default. The language selector is included as a future-ready multilingual support UI for ASEAN users.
            </p>
            <p className="hidden rounded-full bg-brand-mint px-3 py-1.5 font-semibold text-brand-teal md:block">
              Prototype demo data
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>

      <footer className="border-t border-white/50 bg-white/40">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <BrandLogo variant="footer" />
            <p>KawanKerja AI is a prototype for opportunity discovery and guided career support.</p>
          </div>
          <p>Designed for demo use with local storage and mock AI responses.</p>
        </div>
      </footer>
    </div>
  );
}
