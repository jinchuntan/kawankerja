"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_OPPORTUNITIES } from "@/data/opportunities";
import type { Opportunity, UserProfile } from "@/lib/types";

type AppDataContextValue = {
  addOpportunity: (opportunity: Opportunity) => void;
  isHydrated: boolean;
  opportunities: Opportunity[];
  profile: UserProfile | null;
  selectedLanguage: string;
  setProfile: (profile: UserProfile | null) => void;
  setSelectedLanguage: (language: string) => void;
  updateOpportunity: (id: string, opportunity: Opportunity) => void;
};

const AppDataContext = createContext<AppDataContextValue | undefined>(undefined);

const STORAGE_KEYS = {
  language: "kawankerja-ai-language",
  opportunities: "kawankerja-ai-opportunities",
  profile: "kawankerja-ai-profile"
};

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(DEFAULT_OPPORTUNITIES);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedProfile = window.localStorage.getItem(STORAGE_KEYS.profile);
    const savedOpportunities = window.localStorage.getItem(STORAGE_KEYS.opportunities);
    const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    if (savedOpportunities) {
      setOpportunities(JSON.parse(savedOpportunities));
    }

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (profile) {
      window.localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    } else {
      window.localStorage.removeItem(STORAGE_KEYS.profile);
    }
  }, [isHydrated, profile]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEYS.opportunities, JSON.stringify(opportunities));
  }, [isHydrated, opportunities]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEYS.language, selectedLanguage);
  }, [isHydrated, selectedLanguage]);

  const addOpportunity = (opportunity: Opportunity) => {
    setOpportunities((current) => [opportunity, ...current]);
  };

  const updateOpportunity = (id: string, opportunity: Opportunity) => {
    setOpportunities((current) =>
      current.map((item) => (item.id === id ? opportunity : item))
    );
  };

  return (
    <AppDataContext.Provider
      value={{
        addOpportunity,
        isHydrated,
        opportunities,
        profile,
        selectedLanguage,
        setProfile,
        setSelectedLanguage,
        updateOpportunity
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("useAppData must be used within AppDataProvider");
  }

  return context;
}
