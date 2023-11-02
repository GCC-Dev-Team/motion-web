import { useSuspenseQuery } from '@tanstack/react-query'
import { BackgroundImage, Center } from '@mantine/core'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from '@vidstack/react/player/layouts/default'
import videoAPI from '@/app/apis/videoAPI'
import usePlaceholderImageUrl from './usePlaceholderImageUrl'

import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

interface VideoPlayerProps {
  videoId: string
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const { data: video } = useSuspenseQuery({
    ...videoAPI.getVideoDetail(videoId)
  })

  const placeholderUrl = usePlaceholderImageUrl({
    imageUrl: video.cover.videoCoverUrl,
    size: 100
  })

  return (
    <BackgroundImage src={placeholderUrl} radius="md" className="h-full">
      <Center className="h-full">
        <MediaPlayer
          title={video.description}
          src={video.url}
          autoplay
          style={{
            width: 'auto',
            maxHeight: '100%',
            maxWidth: '100%'
          }}
          aspectRatio={`${video.cover.width}/${video.cover.height}`}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </Center>
    </BackgroundImage>
  )
}

export default VideoPlayer
