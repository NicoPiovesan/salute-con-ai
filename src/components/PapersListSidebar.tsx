'use client'

import { getAllPapers } from '@/services/papersService'
import { useState, useEffect } from 'react'
import { Paper } from '@/services/papersService'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import it from "@/locales/it";
import en from "@/locales/en";
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'


  
function PapersList () {
    const [papers, setPapers] = useState<Paper[]>([])
    const [displayedPapers, setDisplayedPapers] = useState<Paper[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [visibleCount, setVisibleCount] = useState(7)
    const params = useParams()
    const currentSlug = params.slug as string
    const searchParams = useSearchParams()
    const lang = searchParams.get('lang') === "en" ? "en" : "it"

    useEffect(() => {

        const fetchPapers = async () => {
            try {
                setIsLoading(true)
                const papersData = await getAllPapers()
                const filteredPapers = papersData.filter(paper => paper.slug !== currentSlug)
                
                setPapers(filteredPapers)

                setDisplayedPapers(papersData.slice(0, visibleCount))
            } catch (error) {
                console.error('Error fetching papers:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPapers()
    }, [currentSlug])

    useEffect(() => {
        setDisplayedPapers(papers.slice(0, visibleCount))
    }, [visibleCount, papers])

    

    return (
      <Suspense fallback={<p>Loading…</p>}>
        <div className="mx-auto list-item mt-10 max-w-2xl grid-cols-1 gap-x-2 gap-y-4 border-l border-gray-200 pt-3 overflow-auto">
        {displayedPapers.map((paper) => (
          <Link key={paper.id} href={`/papers/${paper.slug}?lang=${lang}`} className='m-5 p-4'>
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
                  {lang === "it" ? paper.titleIt : paper.titleEn}
                  </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{lang === "it" ? paper.excerptIt : paper.excerptEn}</p>
            </div>
            
          </article>
          </Link>
        ))}
      </div>
      </Suspense>
    )
}
export const dynamic = 'force-dynamic'
export default function PapersListSidebar() {
    const searchParams = useSearchParams()
    const lang = searchParams.get('lang') === "en" ? "en" : "it"
    const t = lang === "it" ? it : en;
    return(
        <Suspense fallback={<LoadingSpinner />}>
        <div>
        <div className=' m-5 hidden lg:block'>
            <div className='grid grid-cols-2'>
            <h1 className='mt-10 col-span-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{t.articleList}</h1>
            <a className=' col-span-1 mt-10' href={`/?lang=${lang}`}><button className="group relative inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-6 font-medium text-neutral-50"><span>{t.showAll}</span><div className="relative ml-1 h-5 w-5 overflow-hidden"><div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></div></button></a>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
                <PapersList />
            </Suspense>
            
        </div>
        </div>
        </Suspense>
    )
}