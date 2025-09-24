'use client'

import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Paper, getAllPapers } from '@/services/papersService'
import LoadingSpinner from '@/components/LoadingSpinner'
import it from "@/locales/it"
import en from "@/locales/en"

interface PapersListWithSearchProps {
  lang: "it" | "en"
}

function PapersListWithSearch({ lang }: PapersListWithSearchProps) {
  const [allPapers, setAllPapers] = useState<Paper[]>([])
  const [filteredPapers, setFilteredPapers] = useState<Paper[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const t = lang === "it" ? it : en

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        setIsLoading(true)
        const papersData = await getAllPapers()
        setAllPapers(papersData)
        setFilteredPapers(papersData)
      } catch (error) {
        console.error('Error fetching papers:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPapers()
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    
    if (term.trim() === '') {
      setFilteredPapers(allPapers)
      return
    }

    const filtered = allPapers.filter(paper =>
      String(lang === "it" ? paper.titleIt : paper.titleEn).toLowerCase().includes(term.toLowerCase())
    )
    
    setFilteredPapers(filtered)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <div className="relative mt-10">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="lg:w-lg sm:w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
          placeholder={t.searchPlaceholder} 
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-slate-400">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Contatore risultati */}
      {searchTerm && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            {filteredPapers.length} {filteredPapers.length === 1 ? t.result : t.results} {t.foundFor} &quot;{searchTerm}&quot;
          </p>
        </div>
      )}

      {/* Lista paper */}
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <Link key={paper.id} href={`/papers/${paper.slug}?lang=${lang}`}>
              <article className="flex max-w-xl flex-col items-start justify-between hover:border-green-400 hover:bg-green-200 hover:border-1 rounded-2xl p-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-3">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={paper.date} className="text-gray-500">
                    {new Date(paper.date).toLocaleDateString(
                      lang === "it" ? "it-IT" : "en-US", 
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {paper.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    { lang === "it" ? paper.titleIt : paper.titleEn}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {lang === "it" ? paper.excerptIt : paper.excerptEn}
                  </p>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">{t.noArticlesFound}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm ? t.tryOtherTerms(searchTerm) : t.noArticlesAvailable}
            </p>
            {searchTerm && (
             <button onClick={() => handleSearch('')} className="group mt-5 hover:bg-green-50 relative h-12 rounded-full border hover:border-green-200 border-gray-200 bg-transparent px-4 text-neutral-950"><span className="relative inline-flex overflow-hidden"><div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">{t.showAll}</div><div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">{t.showAll}</div></span></button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export const dynamic = 'force-dynamic'

export default function Home() {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') === "en" ? "en" : "it"
  const t = lang === "it" ? it : en


  return (
    <Suspense fallback={<p>Loading…</p>}>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='grid grid-cols-3'>
          
        <div className="col-span-2 mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">{t.publishedArticles}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t.articlesIntro}
          </p>
        </div>
        <Image src="/static/images/logoSalcai.jpeg" className='sm: rounded-4xl shadow-lg' alt="Salute con AI" width={200} height={200} />
        </div>
        
        <PapersListWithSearch lang={lang} />
      </div>
    </div>
    </Suspense>
  )
}
