import { useState, useEffect } from 'react'
import useAuthStore from '@/app/stores/useAuthStore'

const useIsLoggedIn = () => {
  const [isHydrated, setHydrated] = useState(false)

  const isLoggedIn = useAuthStore(state => !!state.token)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return isHydrated ? isLoggedIn : false
}

export default useIsLoggedIn
