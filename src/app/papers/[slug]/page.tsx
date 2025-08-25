import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPaperBySlug, getAllPapers } from '@/services/papersService'
import PapersListSidebar from '@/components/PapersListSidebar'
import ReactMarkdown from 'react-markdown'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const papers = await getAllPapers()
  return papers.map((paper) => ({
    slug: paper.slug,
  }))
}

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
          &larr; Ritorna agli articoli
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
        
        <div className="mt-8 prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Personalizzazioni opzionali dei componenti
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 pl-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 pl-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="mb-1" {...props} />
              ),
              code: ({ node, ...props }) =>
                (node as any).inline ? (
                  <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono" {...props} />
                ) : (
                  <code className="block bg-gray-100 rounded p-4 my-4 text-sm font-mono overflow-x-auto" {...props} />
                ),
              a: ({ node, ...props }) => (
                <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
              ),
            }}
          >
            {paper.content}
          </ReactMarkdown>
        </div>
      </article>
      <PapersListSidebar />
    </div>
  )
}