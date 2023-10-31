'use client'

import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { Box, ScrollArea } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import createJustifiedLayout from 'justified-layout'
import videoAPI from '@/app/apis/videoAPI'
import VideoListItem from '../VideoListItem'

const VideoList = () => {
  const { data } = useSuspenseInfiniteQuery({
    ...videoAPI.getVideoList()
  })

  const { ref, width } = useElementSize()

  const videos = data.pages[0].list

  const layoutResult = createJustifiedLayout(
    videos.map(({ cover }) => cover),
    { containerWidth: width, containerPadding: 0 }
  )

  return (
    <ScrollArea className="h-full">
      <Box className="grid h-full [&>*]:[grid-area:1/1/2/2]" ref={ref}>
        {width
          ? videos.map((video, index) => (
              <VideoListItem
                key={video.videoId}
                video={video}
                box={layoutResult.boxes[index]}
              />
            ))
          : null}
      </Box>
    </ScrollArea>
  )
}

export default VideoList
