import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Stack, Group, Avatar, Text, ActionIcon } from '@mantine/core'
import { IconHeartFilled, IconHeart } from '@tabler/icons-react'
import dayjs from 'dayjs'
import videoAPI from '@/app/apis/videoAPI'
import { type VideoCommentData } from '@/app/apis/videoAPI/type'

interface VideoCommentItemProps {
  videoId: string
  comment: VideoCommentData
}

const VideoCommentItem = ({ videoId, comment }: VideoCommentItemProps) => {
  const queryClient = useQueryClient()

  const { mutate: likeComment, isPending } = useMutation({
    ...videoAPI.likeVideoComment(),
    onSuccess() {
      queryClient.invalidateQueries(videoAPI.getVideoCommentList(videoId))
    }
  })

  const handleLikeComment = () => {
    if (!isPending) {
      likeComment(comment.id)
    }
  }

  return (
    <Group key={comment.id} align="self-start" gap="sm">
      <Avatar color="yellow" src={comment.avatar} />
      <Stack gap={4}>
        <Text c="gray" lh="xs">
          {comment.userName}
        </Text>
        <Text>{comment.content}</Text>
        <Text size="xs" c="gray">
          {dayjs(comment.createAt).format('YYYY-MM DD')}
        </Text>
        <Group gap={6}>
          <ActionIcon
            variant="transparent"
            size="xs"
            color={comment.liked ? 'red' : 'black'}
            onClick={handleLikeComment}>
            {comment.liked ? <IconHeartFilled /> : <IconHeart />}
          </ActionIcon>
          <Text size="xs">{comment.likeCount}</Text>
        </Group>
      </Stack>
    </Group>
  )
}

export default VideoCommentItem
