import { ScrollArea, Stack } from '@mantine/core'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import VideoCommentItem from '../VideoCommentItem'
import { type VideoCommentData } from '@/app/apis/videoAPI/type'

interface VideoCommentListProps {
  videoId: string
  list: VideoCommentData[]
}

const VideoCommentList = ({ videoId, list }: VideoCommentListProps) => {
  const [parent] = useAutoAnimate()

  return (
    <ScrollArea className="h-full flex-1 overflow-hidden">
      <Stack ref={parent}>
        {list.map(comment => (
          <VideoCommentItem
            key={comment.id}
            videoId={videoId}
            comment={comment}
          />
        ))}
      </Stack>
    </ScrollArea>
  )
}

export default VideoCommentList
