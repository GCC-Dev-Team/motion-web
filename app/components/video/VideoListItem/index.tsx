import Link from 'next/link'
import {
  Group,
  Stack,
  Image,
  Title,
  Text,
  Box,
  ActionIcon,
  Card,
  CardSection,
  Button
} from '@mantine/core'
import { IconHeart, IconMessages } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { type VideoData } from '@/app/apis/videoAPI/type'

interface VideoListItemProps {
  video: VideoData
  box: ReturnType<typeof import('justified-layout')>['boxes'][0]
}

const VideoListItem = ({ video, box }: VideoListItemProps) => {
  return (
    <Link
      className="group absolute"
      href={`/video/${video.videoId}`}
      style={{
        width: box.width,
        height: box.height,
        transform: `translate(${box.left}px, ${box.top}px)`
      }}>
      <Card className="h-full transition-transform ease-linear group-hover:scale-95">
        <CardSection className="transition-transform ease-linear group-hover:scale-110">
          <Image
            w={box.width}
            h={box.height}
            src={video.cover.videoCoverUrl}
            alt={video.description}
          />
        </CardSection>
        <Stack
          className="absolute left-0 top-0 h-full w-full"
          justify="space-between"
          p="sm">
          <Group className="self-end" gap="xs">
            <ActionIcon
              variant="filled"
              color="red"
              size="md"
              aria-label="Like">
              <IconHeart className="h-5 w-5" />
            </ActionIcon>
            <Button
              variant="white"
              size="compact-md"
              color="gray"
              leftSection={<IconMessages className="h-5 w-5" />}>
              {video.likeCount}
            </Button>
          </Group>
          <Box className="self-start" c="white">
            <Title order={2}>{video.description}</Title>
            <Group gap="xs">
              <Text>@{video.creator.userName}</Text>
              <Text>{dayjs(video.createAt).from(dayjs())}</Text>
            </Group>
          </Box>
        </Stack>
      </Card>
    </Link>
  )
}

export default VideoListItem
