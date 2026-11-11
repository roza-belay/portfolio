import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/content/portfolio";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: Record<Lang, string>) => string };

const LangContext = createContext<Ctx | null>(null);

/** Holds the current language and remembers the visitor's choice. */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read the saved choice after the page loads (avoids server/browser mismatch).
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "sv") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: (text) => text[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
