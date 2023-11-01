'use client'

import { useRef } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { Box, ScrollArea, type ScrollAreaProps } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import createJustifiedLayout from 'justified-layout'
import videoAPI from '@/app/apis/videoAPI'
import { type VideoData } from '@/app/apis/videoAPI/type'
import VideoListItem from '../VideoListItem'

const VideoList = () => {
  const {
    data: videos,
    fetchNextPage,
    isFetching
  } = useSuspenseInfiniteQuery({
    ...videoAPI.getVideoList(),
    select: data => {
      let videoList: VideoData[] = []

      data.pages.forEach(({ list }) => {
        videoList = videoList.concat(list)
      })

      return videoList
    }
  })

  const { ref: sizeRef, width } = useElementSize()

  const viewportRef = useRef<HTMLDivElement>(null!)

  const handleScrollPositionChange: ScrollAreaProps['onScrollPositionChange'] =
    ({ y }) => {
      if (
        viewportRef.current.scrollHeight -
          (viewportRef.current.clientHeight + y) <
          300 &&
        !isFetching
      ) {
        fetchNextPage()
      }
    }

  const layoutResult = createJustifiedLayout(
    videos.map(({ cover }) => cover),
    { containerWidth: width, containerPadding: 0 }
  )

  return (
    <ScrollArea
      className="h-full"
      viewportRef={viewportRef}
      onScrollPositionChange={handleScrollPositionChange}>
      <Box className="grid h-full [&>*]:[grid-area:1/1/2/2]" ref={sizeRef}>
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
      <div />
    </ScrollArea>
  )
}

export default VideoList
