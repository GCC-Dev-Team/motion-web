import { useEffect, useState } from 'react'
import { Text, ActionIcon, Stack, CopyButton } from '@mantine/core'
import { IconShare } from '@tabler/icons-react'
import notify from '@/app/shared/notify'

const ShareVideoControl = () => {
  const [shareLink, setShareLink] = useState('')

  useEffect(() => {
    setShareLink(window.location.href)
  }, [])

  return (
    <CopyButton value={shareLink}>
      {({ copy }) => (
        <Stack align="center" gap="xs">
          <ActionIcon
            size={48}
            radius="xl"
            variant="outline"
            color="white"
            onClick={() => {
              copy()
              notify.success({
                message: '视频链接已保存到剪贴板，现在就分享给您的朋友吧！'
              })
            }}>
            <IconShare />
          </ActionIcon>
          <Text>分享</Text>
        </Stack>
      )}
    </CopyButton>
  )
}

export default ShareVideoControl
