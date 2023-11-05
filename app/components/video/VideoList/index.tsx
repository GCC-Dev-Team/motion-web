'use client'

import { useEffect, useMemo, useState } from 'react'
import { Box, ScrollArea, Stack } from '@mantine/core'
import { useElementSize, useIntersection } from '@mantine/hooks'
import { useQueryState } from 'next-usequerystate'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'
import VideoListSection from '../VideoListSection'
import ScrollToTopButton from './ScrollToTopButton'

const VideoList = () => {
  const [search] = useQueryState('search')
  const [categoryId] = useQueryState('category')

  const {
    data: { pages },
    fetchNextPage,
    isFetching
  } = useSuspenseInfiniteQuery({
    ...videoAPI.getVideoList({ search, categoryId })
  })

  const { ref: sizeRef, width } = useElementSize<HTMLDivElement>()

  const { ref: intersectionRef, entry } = useIntersection()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (entry?.isIntersecting && !isFetching) {
      fetchNextPage()
    }
  }, [entry, isFetching, fetchNextPage])

  const handleScrollTop = () => {
    sizeRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ScrollArea
      className="flex-1 rounded-lg"
      viewportRef={sizeRef}
      onScrollPositionChange={position => {
        setMounted(position.y > 100)
      }}>
      <Stack gap="xs">
        {useMemo(
          () =>
            width
              ? pages.map(page => (
                  <VideoListSection
                    key={page.currentPage}
                    videos={page.list}
                    width={width}
                  />
                ))
              : null,
          [width, pages]
        )}
      </Stack>
      <ScrollToTopButton mounted={mounted} onScrollToTop={handleScrollTop} />
      <Box className="h-px" ref={intersectionRef} />
    </ScrollArea>
  )
}

export default VideoList
