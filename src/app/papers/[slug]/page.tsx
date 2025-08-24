// src/app/papers/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPaperBySlug, getAllPapers } from '@/services/papersService'
import PapersListSidebar from '@/components/PapersListSidebar'

interface PageProps {
  params: { slug: string }
}

// Questa funzione viene eseguita al build time per generare i path statici
export async function generateStaticParams() {
  const papers = await getAllPapers()
  
  return papers.map((paper) => ({
    slug: paper.slug,
  }))
}

// Metadati dinamici per ogni paper
export async function generateMetadata({ params }: PageProps) {
  const paper = await getPaperBySlug(params.slug)
  
  if (!paper) {
    return {
      title: 'Paper Not Found',
    }
  }
  
  return {
    title: paper.title,
    description: paper.excerpt,
  }
}

export default async function PaperPage({ params }: PageProps) {
  const paper = await getPaperBySlug(params.slug)

  if (!paper) {
    notFound()
  }

  return (
    <div className='lg:grid lg:grid-cols-3'>
    <article className="flex lg:col-span-2 sm:m-5 flex-col items-start justify-center mx-auto max-w-4xl px-4 py-24">
      <Link 
        href="/"
        className="mb-8 text-blue-600 hover:text-blue-800 font-medium transition delay-50 duration-300 ease-in-out hover:-translate-x-3"
      >
        &larr; Ritorna ai paper
      </Link>
      
      <div className="flex items-center gap-x-4 text-xs mb-4">
        <time dateTime={paper.date} className="text-gray-500">
          {new Date(paper.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
          {paper.category}
        </span>
      </div>
      
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {paper.title}
      </h1>
      
      <p className="mt-4 text-gray-600">By {paper.author}</p>
      
      <div 
        className="mt-8 prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: paper.content }}
      />
    </article>
    <PapersListSidebar />
    </div>
  )
}