import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import LangProvider from "@/components/LangProvider"
import { LanguageToggle } from "@/components/LanguageToggle"
import LocalizedLink from "@/components/LocalizedLink"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<p>Loading…</p>}>
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/logoSalcai.ico" />
      </head>
      <body className={inter.className}>
        <LangProvider>
          {/* HEADER */}
          <header className="bg-white m-7">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/logoSalcai.jpeg"
                    className="mr-3 rounded-2xl"
                    alt="Salute con AI"
                    width={60}
                    height={60}
                  />
                  <h1 className="text-xl font-semibold text-gray-700">
                    <LocalizedLink href="/">Digital AI Health</LocalizedLink>

                  </h1>
                </div>

                <nav className="block md:ml-6 md:flex md:space-x-8">
                  <LocalizedLink
                    href="/"
                    className="group hidden lg:block hover:text-blue-600 transition duration-300 text-md font-medium"
                  >
                    Home
                    <span className="max-w-0 hidden lg:block group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                  </LocalizedLink>
                  <LocalizedLink
                    href="/about"
                    className="group hover:text-blue-600 transition duration-300 text-md font-medium"
                  >
                    About
                    <span className="sm:block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                  </LocalizedLink>
                  <div className="flex gap-2">
                    <LanguageToggle />
                  </div>
                </nav>
              </div>
            </div>
          </header>

          {/* BANNER */}
          <Image
            src="/banner_hcai.jpg"
            className="z-0 hidden lg:block relative w-full h-50 mx-auto mt-12 box-shadow object-cover"
            alt="Salute con AI"
            width={3000}
            height={400}
          />

          {/* MAIN CONTENT */}
          <main className="lg:m-7 lg:shadow-md lg:rounded-3xl">{children}</main>

          {/* FOOTER */}
          <footer className="bg-white mt-12">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
              <div className="flex justify-center space-x-6 md:order-2">
                {/* Social*/}
              </div>
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-base text-gray-400">
                  &copy; 2025 Digital  AI Health.
                </p>
              </div>
            </div>
          </footer>
        </LangProvider>
      </body>
    </html>
    </Suspense>
  )
}
