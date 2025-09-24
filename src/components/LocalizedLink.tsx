"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

interface LocalizedLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  // other props...
  className?: string;
}
export default function LocalizedLink({ href = '', children, ...props }: LocalizedLinkProps) {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang") || "it"

  const withLang = href.includes("?")
    ? `${href}&lang=${lang}`
    : `${href}?lang=${lang}`

  return (
    <Link href={withLang} {...props}>
      {children}
    </Link>
  )
}
