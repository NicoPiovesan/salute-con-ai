// src/services/papersService.ts
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc,
  query, 
  orderBy 
} from 'firebase/firestore'
import { db } from '@/lib/firebase'

export interface Paper {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  author: string
  category: string
  content: string
}

// Funzione per ottenere tutti i paper
export const getAllPapers = async (): Promise<Paper[]> => {
  try {
    const q = query(collection(db, 'papers'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    const papers: Paper[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      papers.push({
        id: doc.id,
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        content: data.content || ''
      } as Paper)
    })
    
    return papers
  } catch (error) {
    console.error('Error getting papers:', error)
    return []
  }
}

// Funzione per ottenere un paper specifico tramite slug
export const getPaperBySlug = async (slug: string): Promise<Paper | null> => {
  try {
    // Prima cerchiamo il documento con lo slug specificato
    const q = query(collection(db, 'papers'))
    const querySnapshot = await getDocs(q)
    
    let paperData = null
    let paperId = null
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (data.slug === slug) {
        paperId = doc.id
        paperData = data
      }
    })
    
    if (!paperId || !paperData) return null
    
    return {
      id: paperId,
      title: paperData.title || '',
      slug: paperData.slug || '',
      excerpt: paperData.excerpt || '',
      date: paperData.date || '',
      author: paperData.author || '',
      category: paperData.category || '',
      content: paperData.content || ''
    } as Paper
  } catch (error) {
    console.error('Error getting paper:', error)
    return null
  }
}