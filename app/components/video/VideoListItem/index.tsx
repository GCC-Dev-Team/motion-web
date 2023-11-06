import { useEffect } from 'react'
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
  Button,
  Tooltip
} from '@mantine/core'
import { IconHeart, IconMessages } from '@tabler/icons-react'
import { useDisclosure, useHover, useTimeout } from '@mantine/hooks'
import dayjs from 'dayjs'
import { type VideoData } from '@/app/apis/videoAPI/type'

interface VideoListItemProps {
  video: VideoData
  box: ReturnType<typeof import('justified-layout')>['boxes'][0]
}

const VideoListItem = ({ video, box }: VideoListItemProps) => {
  const { hovered, ref } = useHover<HTMLAnchorElement>()

  const [opened, handlers] = useDisclosure(false)

  const { start, clear } = useTimeout(() => handlers.open(), 1000)

  useEffect(() => {
    if (hovered) {
      start()
    } else {
      clear()
      handlers.close()
    }
  }, [hovered, start, clear, handlers])

  return (
    <Link
      ref={ref}
      className="group absolute"
      href={`/video?videoId=${video.videoId}`}
      style={{
        width: box.width,
        height: box.height,
        transform: `translate(${box.left}px, ${box.top}px)`
      }}>
      <Card className="h-full transition-transform ease-linear group-hover:scale-95">
        <CardSection>
          {opened ? (
            <video autoPlay src={video.url} />
          ) : (
            <Image
              w={box.width}
              h={box.height}
              src={video.cover.videoCoverUrl}
              alt={video.description}
            />
          )}
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
              {video.videoCommentCount}
            </Button>
          </Group>
          <Box className="self-start" c="white">
            <Tooltip label={video.description} position="bottom">
              <Title order={3} className="line-clamp-2">
                {video.description}
              </Title>
            </Tooltip>
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
