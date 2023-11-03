import { ScrollArea, Stack } from '@mantine/core'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import videoAPI from '@/app/apis/videoAPI'
import VideoCommentItem from '../VideoCommentItem'

interface VideoCommentListProps {
  videoId: string
}

const VideoCommentList = ({ videoId }: VideoCommentListProps) => {
  const { data: comments } = useSuspenseQuery(
    videoAPI.getVideoCommentList(videoId)
  )

  const [parent] = useAutoAnimate()

  return (
    <ScrollArea className="h-full flex-1 overflow-hidden">
      <Stack ref={parent}>
        {comments.map(comment => (
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
