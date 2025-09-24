"use client"

import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { useLang } from "./LangProvider"

export function LanguageToggle() {
  const { lang } = useLang()

  return (
    <div className="relative inline-flex items-center h-6">
      {/* Bandiera Italiana → passa a EN */}
      <Link
        href="?lang=en"
        className={`absolute transition-all duration-300 ease-in-out ${
          lang === "it"
            ? "opacity-100 z-10 scale-110"
            : "opacity-0 z-0 scale-90 pointer-events-none"
        }`}
      >
        <ReactCountryFlag
          countryCode="IT"
          style={{ fontSize: "1.5rem" }}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      </Link>

      {/* Bandiera Inglese → passa a IT */}
      <Link
        href="?lang=it"
        className={`absolute transition-all duration-300 ease-in-out ${
          lang === "en"
            ? "opacity-100 z-10 scale-110"
            : "opacity-0 z-0 scale-90 pointer-events-none"
        }`}
      >
        <ReactCountryFlag
          countryCode="GB"
          style={{ fontSize: "1.5rem" }}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      </Link>
    </div>
  )
}
