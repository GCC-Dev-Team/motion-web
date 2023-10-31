export interface VideoData {
  category: {
    categoryId: string
    categoryName: string
  }
  creator: {
    userId: string
    userName: string
  }
  cover: {
    videoCoverUrl: string
    width: number
    height: number
  }
  videoCommentCount: number
  videoId: string
  url: string
  description: string
  tags: string
  likeCount: number
  views: number
  createAt: null
  updateAt: null
}

export interface GetVideoListData {
  total: number
  pageSize: number
  totalPage: number
  currentPage: number
  list: VideoData[]
}
