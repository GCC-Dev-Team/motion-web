'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Box, rem } from '@mantine/core'
import Fullpage, { type fullpageOptions } from '@fullpage/react-fullpage'
import { useQueryState, parseAsString } from 'next-usequerystate'
import { useQueryClient, useSuspenseQueries } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'
import VideoBackground from '@/app/components/video/VideoBackground'
import VideoPlayer from '@/app/components/video/VideoPlayer'

import './fullpage.css'

const VideoDetailPage = () => {
  const searchParams = useSearchParams()

  const [videoId, setVideoId] = useQueryState(
    'videoId',
    parseAsString.withDefault(searchParams.get('videoId')!)
  )

  const queryClient = useQueryClient()

  const videoContextIds = useSuspenseQueries({
    queries: [
      videoAPI.getPreviousVideoId(videoId),
      videoAPI.getNextVideoId(videoId)
    ]
  })

  const handleLeave: fullpageOptions['onLeave'] = (
    _origin,
    _destination,
    direction
  ) => {
    setVideoId(
      direction === 'up' ? videoContextIds[0].data : videoContextIds[1].data
    )
  }

  useEffect(() => {
    videoContextIds.forEach(({ data }) => {
      queryClient.prefetchQuery(videoAPI.getVideoDetail(data))
    })
  }, [queryClient, videoContextIds])

  return (
    <>
      <VideoBackground videoId={videoId} />
      <Fullpage
        credits={{}}
        continuousVertical
        paddingTop={rem(80)}
        beforeLeave={() => {}}
        onLeave={handleLeave}
        render={() => (
          <Fullpage.Wrapper>
            <Box className="section">
              <VideoPlayer videoId={videoId} />
            </Box>
            <Box className="section">
              <VideoPlayer videoId={videoId} />
            </Box>
          </Fullpage.Wrapper>
        )}
      />
    </>
  )

  return
}

export default VideoDetailPage
