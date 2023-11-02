'use client'

import VideoPlayer from '@/app/components/video/VideoPlayer'

interface VideoPageParams {
  videoId: string
}

interface VideoPageProps {
  params: VideoPageParams
}

const VideoDetailPage = ({ params }: VideoPageProps) => {
  const { videoId } = params

  return <VideoPlayer videoId={videoId} />
}

export default VideoDetailPage
