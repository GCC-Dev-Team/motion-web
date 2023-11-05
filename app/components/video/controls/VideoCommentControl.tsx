import {
  Drawer,
  Text,
  ActionIcon,
  Group,
  Stack,
  Divider,
  Indicator
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMessageCircle } from '@tabler/icons-react'
import { useSuspenseQuery } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'
import VideoCommentList from '../VideoCommentList'
import VideoCommentForm from '../VideoCommentForm'

interface VideoCommentControlProps {
  videoId: string
}

const VideoCommentControl = ({ videoId }: VideoCommentControlProps) => {
  const {
    data: { commentCount, list: commentList }
  } = useSuspenseQuery(videoAPI.getVideoCommentList(videoId))

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer
        title={
          <Group gap="xs">
            评论
            <Text span c="gray">
              {commentCount}
            </Text>
          </Group>
        }
        styles={{
          content: { display: 'flex', flexDirection: 'column' },
          body: { flex: 1, overflow: 'hidden' }
        }}
        position="right"
        opened={opened}
        onClose={close}>
        <Stack className="h-full" gap={0}>
          <VideoCommentList videoId={videoId} list={commentList} />
          <Divider mb="md" />
          <VideoCommentForm videoId={videoId} />
        </Stack>
      </Drawer>
      <Stack align="center" gap="xs">
        <Indicator inline size={28} label={commentCount}>
          <ActionIcon
            size={48}
            radius="xl"
            variant="outline"
            color="white"
            onClick={open}>
            <IconMessageCircle />
          </ActionIcon>
        </Indicator>
        <Text>评论</Text>
      </Stack>
    </>
  )
}

export default VideoCommentControl
