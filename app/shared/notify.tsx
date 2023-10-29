import { showNotification, NotificationData } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'

const notify = {
  success(notification: NotificationData) {
    showNotification({
      color: 'green',
      icon: <IconCheck size={18} />,
      ...notification
    })
  },
  error(notification: NotificationData) {
    showNotification({
      color: 'red',
      icon: <IconX size={18} />,
      ...notification
    })
  }
}

export default notify
