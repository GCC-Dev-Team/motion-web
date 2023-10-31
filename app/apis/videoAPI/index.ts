import { infiniteQueryOptions } from '@tanstack/react-query'
import httpClient from '../httpClient'
import { GetVideoListData } from './type'

const VIDEO_API_PATH = 'video'

const accountAPI = {
  getVideoList: (pageSize: number = 20) =>
    infiniteQueryOptions({
      queryKey: [VIDEO_API_PATH],
      queryFn: ({ pageParam }) => {
        const searchParams = {
          currentPage: pageParam,
          pageSize
        }

        return httpClient
          .get(VIDEO_API_PATH + '/list', { searchParams })
          .json<GetVideoListData>()
      },
      initialPageParam: 1,
      getPreviousPageParam: () => {
        return 0
      },
      getNextPageParam: () => {
        return 0
      }
    })
}

export default accountAPI
