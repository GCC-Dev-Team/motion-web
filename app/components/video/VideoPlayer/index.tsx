import { useSuspenseQuery } from '@tanstack/react-query'
import { Center, Stack } from '@mantine/core'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from '@vidstack/react/player/layouts/default'
import videoAPI from '@/app/apis/videoAPI'
import VideoCommentControl from '../controls/VideoCommentControl'
import ShareVideoControl from '../controls/ShareVideoControl'

import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import './media-player.css'

interface VideoPlayerProps {
  videoId: string
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const { data: video } = useSuspenseQuery(videoAPI.getVideoDetail(videoId))

  return (
    <Center className="h-full" p="lg">
      <MediaPlayer
        title={video.description}
        src={video.url}
        aspectRatio={`${video.cover.width}/${video.cover.height}`}
        autoplay>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons}>
          <Stack className="absolute bottom-1/4 right-6">
            <VideoCommentControl videoId={videoId} />
            <ShareVideoControl />
          </Stack>
        </DefaultVideoLayout>
      </MediaPlayer>
    </Center>
  )
}

export default VideoPlayer
