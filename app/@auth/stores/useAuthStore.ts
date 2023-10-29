import { create } from 'zustand'
import {
  persist,
  createJSONStorage,
  type StateStorage
} from 'zustand/middleware'
import Cookies from 'js-cookie'
import { type LoginData } from '@/app/apis/accountAPI/type'

const AUTH_STORAGE_NAME = 'auth-storage'

const cookieStorage: StateStorage = {
  getItem: name => Cookies.get(name) ?? null,
  setItem: (name, value) => {
    Cookies.set(name, value, {
      expires: 7
    })
  },
  removeItem: name => {
    Cookies.remove(name)
  }
}

const useAuthStore = create<Partial<LoginData>>()(
  persist(() => ({}), {
    name: AUTH_STORAGE_NAME,
    storage: createJSONStorage(() => cookieStorage)
  })
)

export default useAuthStore
