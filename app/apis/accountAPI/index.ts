import httpClient from '../httpClient'
import {
  type RegisterData,
  type LoginDTO,
  type LoginData,
  type RegisterDTO
} from './type'

const ACCOUNT_API_PATH = 'account'

const accountAPI = {
  login: () => ({
    mutationFn: (params: LoginDTO) =>
      httpClient
        .post(ACCOUNT_API_PATH + '/login', { json: params })
        .json<LoginData>()
  }),
  register: () => ({
    mutationFn: (params: RegisterDTO) =>
      httpClient
        .post(ACCOUNT_API_PATH + '/register', { json: params })
        .json<RegisterData>()
  })
}

export default accountAPI
