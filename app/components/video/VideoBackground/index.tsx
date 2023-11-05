import { type PropsWithChildren } from 'react'
import { BackgroundImage } from '@mantine/core'
import { useSuspenseQuery } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'
import usePlaceholderImageUrl from './usePlaceholderImageUrl'

interface VideoBackgroundProps {
  videoId: string
}

const VideoBackground = ({
  videoId
}: PropsWithChildren<VideoBackgroundProps>) => {
  const { data: video } = useSuspenseQuery(videoAPI.getVideoDetail(videoId))

  const placeholderUrl = usePlaceholderImageUrl({
    imageUrl: video.cover.videoCoverUrl,
    size: 100
  })

  return (
    <BackgroundImage
      src={placeholderUrl}
      className="fixed inset-0"></BackgroundImage>
  )
}

export default VideoBackground
