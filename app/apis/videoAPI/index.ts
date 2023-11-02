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
      getPreviousPageParam: firstPage => {
        if (firstPage.currentPage > 0) {
          return firstPage.currentPage - 1
        }
      },
      getNextPageParam: data => {
        if (data.currentPage < data.totalPage) {
          return data.currentPage + 1
        }
      }
    })
}

export default accountAPI
