'use client'

import {
  Avatar,
  Button,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Stack,
  Text
} from '@mantine/core'
import { useSuspenseQuery, useMutation } from '@tanstack/react-query'
import { IconLogout } from '@tabler/icons-react'
import userAPI from '@/app/apis/userAPI'
import accountAPI from '@/app/apis/accountAPI'
import authStore from '@/app/stores/useAuthStore'

const UserInfoMenu = () => {
  const { data: userInfo } = useSuspenseQuery(userAPI.getUserInfo())

  const { mutate: logout } = useMutation({
    ...accountAPI.logout(),
    onSettled() {
      authStore.setState({}, true)
    }
  })

  return (
    <Menu shadow="md" width={200}>
      <MenuTarget>
        <Button
          variant="subtle"
          size="lg"
          leftSection={<Avatar color="yellow" src={userInfo.avatar} />}>
          <Stack align="start" gap={0}>
            <Text c="dark">{userInfo.userName}</Text>
            <Text size="xs">{userInfo.email}</Text>
          </Stack>
        </Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuLabel>User Profile</MenuLabel>
        <MenuItem
          leftSection={<IconLogout className="h-4 w-4" />}
          onClick={() => logout()}>
          退出登录
        </MenuItem>
      </MenuDropdown>
    </Menu>
  )
}

export default UserInfoMenu
