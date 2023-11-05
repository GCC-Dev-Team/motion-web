import { queryOptions } from '@tanstack/react-query'
import httpClient from '../httpClient'
import { GetUserInfoData } from './type'

const USER_API_PATH = 'user'

const userAPI = {
  getUserInfo: () =>
    queryOptions({
      queryKey: [USER_API_PATH, 'info'],
      queryFn: () =>
        httpClient.get(USER_API_PATH + '/info').json<GetUserInfoData>()
    })
}

export default userAPI
