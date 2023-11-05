'use client'

import { Button, Flex } from '@mantine/core'
import useIsLoggedIn from '@/app/hooks/useIsLoggedIn'
import openLoginModal from '@/app/components/auth/LoginForm/openLoginModal'
import UserInfoMenu from './UserInfoMenu'

const UserInfo = () => {
  const isLoggedIn = useIsLoggedIn()

  return (
    <Flex justify="center">
      {isLoggedIn ? (
        <UserInfoMenu />
      ) : (
        <Button onClick={openLoginModal}>登录</Button>
      )}
    </Flex>
  )
}

export default UserInfo
