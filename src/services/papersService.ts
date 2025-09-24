import { 
  collection, 
  getDocs, 
  query, 
  orderBy 
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
interface PaperDoc {
  'title-it': string
  'title-en': string
  'excerpt-it': string
  'excerpt-en': string
  'content-it': string
  'content-en': string
  slug: string
  date: string
  category: string
}

export interface Paper {
  id: string
  titleIt: string
  titleEn: string
  slug: string
  excerptIt: string
  excerptEn: string
  date: string
  category: string
  contentIt: string
  contentEn: string
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
        titleIt: data['title-it'] || '',
        titleEn: data['title-en'] || '',
        slug: data.slug || '',
        excerptIt: data['excerpt-it'] || '',
        excerptEn: data['excerpt-en'] || '',
        date: data.date || '',
        category: data.category || '',
        contentIt: data['content-it'] || '',
        contentEn: data['content-en'] || ''
      })
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
    const q = query(collection(db, 'papers'))
    const querySnapshot = await getDocs(q)

    let paper: Paper | null = null

    querySnapshot.forEach((doc) => {
      const data = doc.data() as PaperDoc
      if (data.slug === slug) {
        paper = {
          id: doc.id,
          titleIt: data['title-it'],
          titleEn: data['title-en'],
          excerptIt: data['excerpt-it'],
          excerptEn: data['excerpt-en'],
          contentIt: data['content-it'],
          contentEn: data['content-en'],
          slug: data.slug,
          date: data.date,
          category: data.category,
        }
      }
    })

    return paper
  } catch (error) {
    console.error('Error getting paper:', error)
    return null
  }
}

