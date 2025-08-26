import { 
  collection, 
  getDocs, 
  query, 
  orderBy 
} from 'firebase/firestore'
import { db } from '@/lib/firebase'

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
    
    let paperData: any = null
    let paperId: string | null = null
    
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
      titleIt: paperData['title-it'] || '',
      titleEn: paperData['title-en'] || '',
      slug: paperData.slug || '',
      excerptIt: paperData['excerpt-it'] || '',
      excerptEn: paperData['excerpt-en'] || '',
      date: paperData.date || '',
      category: paperData.category || '',
      contentIt: paperData['content-it'] || '',
      contentEn: paperData['content-en'] || ''
    }
  } catch (error) {
    console.error('Error getting paper:', error)
    return null
  }
}
