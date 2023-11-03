import { ActionIcon, Box, Group, Textarea } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import useVideoCommentForm from './useVideoCommentForm'

interface VideoCommentFormProps {
  videoId: string
}

const VideoCommentForm = ({ videoId }: VideoCommentFormProps) => {
  const { form, handleSubmit, isPending } = useVideoCommentForm({ videoId })

  return (
    <Box>
      <form className="w-full" onSubmit={handleSubmit}>
        <Group>
          <Textarea
            {...form.getInputProps('content')}
            className="flex-1"
            placeholder="说点什么吧..."
          />
          <ActionIcon type="submit" size="lg" radius="xl" loading={isPending}>
            <IconSend />
          </ActionIcon>
        </Group>
      </form>
    </Box>
  )
}

export default VideoCommentForm
