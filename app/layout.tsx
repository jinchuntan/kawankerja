import type { Metadata } from "next";
import "./globals.css";
import { AppDataProvider } from "@/components/providers/app-data-provider";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "KawanKerja AI",
  description:
    "A prototype platform helping underserved ASEAN youth discover scholarships, courses, internships, and jobs with AI-powered guidance."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppDataProvider>
          <SiteShell>{children}</SiteShell>
        </AppDataProvider>
      </body>
    </html>
  );
}

