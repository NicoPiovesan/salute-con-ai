// src/app/papers/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Dati simulati - nella realtà questi verrebbero da un CMS o database
const papers = [
  {
    id: 1,
    title: 'Advances in Quantum Computing',
    slug: 'quantum-computing-advances',
    content: `
      <h2>Introduction</h2>
      <p>Quantum computing represents a paradigm shift in computational capabilities, leveraging the principles of quantum mechanics to process information in ways classical computers cannot.</p>
      
      <h2>Methodology</h2>
      <p>Our research employed superconducting qubits in a novel arrangement that significantly reduces decoherence times while maintaining computational fidelity.</p>
      
      <h2>Findings</h2>
      <p>We demonstrated a 37% improvement in error correction efficiency and successfully ran Shor's algorithm on a 7-qubit system with unprecedented accuracy.</p>
      
      <h2>Conclusion</h2>
      <p>These advances pave the way for more practical quantum computing applications in the near future, particularly in the fields of cryptography and complex system simulation.</p>
    `,
    date: '2023-10-15',
    author: 'Dr. Jane Smith',
    category: 'Computer Science'
  },
  {
    id: 2,
    title: 'Machine Learning in Healthcare',
    slug: 'ml-healthcare',
    content: `
      <h2>Introduction</h2>
      <p>The integration of machine learning into healthcare diagnostics has shown remarkable potential for improving accuracy and efficiency in medical imaging analysis.</p>
      
      <h2>Methodology</h2>
      <p>We developed a convolutional neural network architecture specifically tailored for detecting early-stage tumors in MRI scans, trained on a dataset of over 15,000 annotated images.</p>
      
      <h2>Findings</h2>
      <p>Our model achieved a 94.3% detection accuracy with a false positive rate of just 2.1%, outperforming traditional diagnostic methods by a significant margin.</p>
      
      <h2>Conclusion</h2>
      <p>AI-assisted diagnostic tools represent a promising avenue for improving healthcare outcomes, particularly in resource-limited settings where specialist availability is constrained.</p>
    `,
    date: '2023-09-22',
    author: 'Dr. Alan Johnson',
    category: 'Artificial Intelligence'
  },
  {
    id: 3,
    title: 'Sustainable Energy Solutions',
    slug: 'sustainable-energy',
    content: `
      <h2>Introduction</h2>
      <p>As global energy demands continue to rise, developing efficient and scalable renewable energy solutions has become increasingly critical.</p>
      
      <h2>Methodology</h2>
      <p>Our team designed a novel perovskite solar cell structure with improved stability and energy conversion efficiency, tested under various environmental conditions.</p>
      
      <h2>Findings</h2>
      <p>We achieved a record 28.7% conversion efficiency with less than 5% degradation after 1000 hours of continuous operation, addressing key limitations of previous designs.</p>
      
      <h2>Conclusion</h2>
      <p>This breakthrough in solar cell technology brings us closer to cost-effective renewable energy solutions that can compete with traditional fossil fuels on both efficiency and economic metrics.</p>
    `,
    date: '2023-08-05',
    author: 'Dr. Maria Rodriguez',
    category: 'Environmental Science'
  },
]

export async function generateStaticParams() {
  return papers.map((paper) => ({
    slug: paper.slug,
  }))
}

export default function PaperPage({ params }: { params: { slug: string } }) {
  const paper = papers.find((paper) => paper.slug === params.slug)

  if (!paper) {
    notFound()
  }

  return (
    <article className="flex flex-col items-start justify-center mx-auto max-w-4xl px-4 py-24">
      <Link 
        href="/"
        className="mb-8 text-blue-600 hover:text-blue-800 font-medium"
      >
        &larr; Back to all papers
      </Link>
      
      <div className="flex items-center gap-x-4 text-xs mb-4">
        <time dateTime={paper.date} className="text-gray-500">
          {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
  )
}