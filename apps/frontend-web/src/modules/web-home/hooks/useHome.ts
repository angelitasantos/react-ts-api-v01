import { useEffect, useState } from 'react'
import { homeService } from '../services/homeService'
import type { HomeContent } from '../types/home'
import { HOME_LOAD_ERROR } from '@project/shared'

interface UseHomeReturn {
  home: HomeContent | null
  loading: boolean
  error: string | null
}

export function useHome(): UseHomeReturn {
  const [home, setHome] = useState<HomeContent | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchHome() {
      try {
        setLoading(true)
        setError(null)

        const data = await homeService.getActiveHome()
        setHome(data)
      } catch {
        setError(HOME_LOAD_ERROR)
      } finally {
        setLoading(false)
      }
    }
    fetchHome()
  }, [])

  return { home, loading, error }
}