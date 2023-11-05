import { useSuspenseQuery } from '@tanstack/react-query'
import { Box, Center } from '@mantine/core'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from '@vidstack/react/player/layouts/default'
import videoAPI from '@/app/apis/videoAPI'
import VideoCommentControl from '../controls/VideoCommentControl'

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
          <Box className="absolute bottom-1/3 right-6">
            <VideoCommentControl videoId={videoId} />
          </Box>
        </DefaultVideoLayout>
      </MediaPlayer>
    </Center>
  )
}

export default VideoPlayer
