"use client"

import {Suspense} from "react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { useLang } from "./LangProvider"

export function LanguageToggle() {
  const { lang } = useLang()

  return (
    <Suspense>
    <div className="relative inline-flex items-center h-6">
      {/* Bandiera Italiana → passa a EN */}
      <Link href="?lang=it" className="md:mr-2 sm:mr-1">
        <ReactCountryFlag
          countryCode="IT"
          style={{ fontSize: "1.5rem" }}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      </Link>

      {/* Bandiera Inglese → passa a IT */}
      <Link
        href="?lang=en" className="ml-2">
        <ReactCountryFlag
          countryCode="GB"
          style={{ fontSize: "1.5rem" }}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      </Link>
    </div>
    </Suspense>
  )
}
