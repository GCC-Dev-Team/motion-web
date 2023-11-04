import { memo, useMemo } from 'react'
import { Box } from '@mantine/core'
import createJustifiedLayout from 'justified-layout'
import { type VideoData } from '@/app/apis/videoAPI/type'
import VideoListItem from '../VideoListItem'

interface VideoListSectionProps {
  videos: VideoData[]
  width: number
}

const VideoListSection = memo(({ videos, width }: VideoListSectionProps) => {
  const { boxes, containerHeight } = useMemo(
    () =>
      createJustifiedLayout(
        videos.map(({ cover }) => cover),
        { containerWidth: width, containerPadding: 0 }
      ),
    [videos, width]
  )

  return (
    <Box className="relative" h={containerHeight}>
      {videos.map((video, index) => (
        <VideoListItem key={video.videoId} video={video} box={boxes[index]} />
      ))}
    </Box>
  )
})

VideoListSection.displayName = 'VideoListSection'

export default VideoListSection
