// src/app/page.tsx
import Link from 'next/link'

// Simulazione di dati da un'API o database
const papers = [
  {
    id: 1,
    title: 'Advances in Quantum Computing',
    slug: 'quantum-computing-advances',
    excerpt: 'Exploring the latest breakthroughs in quantum computation and their implications for cryptography.',
    date: '2023-10-15',
    author: 'Dr. Jane Smith',
    category: 'Computer Science'
  },
  {
    id: 2,
    title: 'Machine Learning in Healthcare',
    slug: 'ml-healthcare',
    excerpt: 'How machine learning algorithms are revolutionizing diagnostic medicine and treatment plans.',
    date: '2023-09-22',
    author: 'Dr. Alan Johnson',
    category: 'Artificial Intelligence'
  },
  {
    id: 3,
    title: 'Sustainable Energy Solutions',
    slug: 'sustainable-energy',
    excerpt: 'Novel approaches to renewable energy generation and storage for a greener future.',
    date: '2023-08-05',
    author: 'Dr. Maria Rodriguez',
    category: 'Environmental Science'
  },
]

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32 m-3 rounded-3xl shadow-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research Papers</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A collection of recent academic publications and research findings.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {papers.map((paper) => (
            <article key={paper.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={paper.date} className="text-gray-500">
                  {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {paper.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/papers/${paper.slug}`}>
                    <span className="absolute inset-0" />
                    {paper.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{paper.excerpt}</p>
              </div>
              <div className="relative mt-4 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {paper.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}