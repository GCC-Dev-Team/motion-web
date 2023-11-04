'use client'

import { Stack } from '@mantine/core'
import VideoCategoryList from '@/app/components/video/VideoCategoryList'
import VideoList from '@/app/components/video/VideoList'

const HomePage = () => {
  return (
    <Stack>
      <VideoCategoryList />
      <VideoList />
    </Stack>
  )
}

export default HomePage
