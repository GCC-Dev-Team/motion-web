import { memo, useCallback, useMemo } from 'react'
import { Box, Card, Title } from '@mantine/core'
import createJustifiedLayout from 'justified-layout'
import gradient from '@privjs/gradients'
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

  const VideoListItemPlaceholder = useCallback(() => {
    const lastBox = boxes[boxes.length - 1]

    if (lastBox.left + lastBox.width === width) {
      return null
    }

    return (
      <Card
        bg={gradient(videos[0].description)}
        className="rounde absolute"
        top={lastBox.top}
        left={lastBox.left + lastBox.width + 10}
        w={width - lastBox.left - lastBox.width - 10}
        h={lastBox.height}>
        <Title order={3} c="white">
          广告
        </Title>
      </Card>
    )
  }, [boxes, width, videos])

  return (
    <Box className="relative" h={containerHeight}>
      {videos.map((video, index) => (
        <VideoListItem key={video.videoId} video={video} box={boxes[index]} />
      ))}
      <VideoListItemPlaceholder />
    </Box>
  )
})

VideoListSection.displayName = 'VideoListSection'

export default VideoListSection
