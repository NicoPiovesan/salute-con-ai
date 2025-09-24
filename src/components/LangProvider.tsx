"use client"

import { Suspense } from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

type Lang = "it" | "en"

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const [lang, setLang] = useState<Lang>("it")

  useEffect(() => {
    const langParam = searchParams.get("lang")
    if (langParam === "en" || langParam === "it") {
      setLang(langParam)
    }
  }, [searchParams])

  return (
    <Suspense>
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
    </Suspense>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error("useLang must be used inside LangProvider")
  }
  return context
}
