'use client'

import { useEffect } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { Box, ScrollArea, Stack } from '@mantine/core'
import { useElementSize, useIntersection } from '@mantine/hooks'
import videoAPI from '@/app/apis/videoAPI'
import VideoListSection from '../VideoListSection'

const VideoList = () => {
  const {
    data: { pages },
    fetchNextPage,
    isFetching
  } = useSuspenseInfiniteQuery({
    ...videoAPI.getVideoList()
  })

  const { ref: sizeRef, width } = useElementSize()

  const { ref: intersectionRef, entry } = useIntersection()

  useEffect(() => {
    if (entry?.isIntersecting && !isFetching) {
      fetchNextPage()
    }
  }, [entry, isFetching, fetchNextPage])

  return (
    <ScrollArea className="h-full" viewportRef={sizeRef}>
      <Stack gap="xs">
        {width
          ? pages.map(page => (
              <VideoListSection
                key={page.currentPage}
                videos={page.list}
                width={width}
              />
            ))
          : null}
      </Stack>
      <Box className="h-px" ref={intersectionRef} />
    </ScrollArea>
  )
}

export default VideoList
