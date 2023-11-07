'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
import { Mousewheel, Keyboard } from 'swiper/modules'
import { useQueryState, parseAsString } from 'next-usequerystate'
import { useQueryClient, useSuspenseQueries } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'
import VideoBackground from '@/app/components/video/VideoBackground'
import VideoPlayer from '@/app/components/video/VideoPlayer'

import 'swiper/css'

const VideoDetailPage = () => {
  const searchParams = useSearchParams()

  const [videoId, setVideoId] = useQueryState(
    'videoId',
    parseAsString.withDefault(searchParams.get('videoId')!)
  )

  const [swiper, setSwiper] = useState<SwiperClass | null>(null)

  const queryClient = useQueryClient()

  const videoContextIds = useSuspenseQueries({
    queries: [
      videoAPI.getPreviousVideoId(videoId),
      videoAPI.getNextVideoId(videoId)
    ]
  })

  useEffect(() => {
    videoContextIds.forEach(({ data }) => {
      queryClient.prefetchQuery(videoAPI.getVideoDetail(data))
    })
  }, [queryClient, videoContextIds])

  useEffect(() => {
    if (swiper) {
      const handlePrevTransitionStart = () => {
        setVideoId(videoContextIds[0].data)
      }

      const handleNextTransitionStart = () => {
        setVideoId(videoContextIds[1].data)
      }

      swiper.on('slidePrevTransitionStart', handlePrevTransitionStart)
      swiper.on('slideNextTransitionStart', handleNextTransitionStart)
      return () => {
        swiper.off('slidePrevTransitionStart', handlePrevTransitionStart)
        swiper.off('slidePrevTransitionStart', handlePrevTransitionStart)
      }
    }
  }, [swiper, setVideoId, videoContextIds])

  return (
    <>
      <VideoBackground videoId={videoId} />
      <Swiper
        className="h-full"
        direction="vertical"
        loop
        keyboard
        mousewheel
        allowTouchMove={false}
        modules={[Keyboard, Mousewheel]}
        onSwiper={setSwiper}>
        <SwiperSlide>
          {({ isActive }) => isActive && <VideoPlayer videoId={videoId} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => isActive && <VideoPlayer videoId={videoId} />}
        </SwiperSlide>
      </Swiper>
    </>
  )

  return
}

export default VideoDetailPage
