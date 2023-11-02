'use client'

import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Center
} from '@mantine/core'
import useLoginForm from './useLoginForm'
import { modals } from '@mantine/modals'
import openRegisterModal from '../RegisterForm/openRegisterModal'

const LoginForm = () => {
  const { form, handleSubmit, isPending } = useLoginForm()

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          autoComplete="email"
          type="email"
          label="邮箱"
          placeholder="hello@gmail.com"
          required
          {...form.getInputProps('email')}
        />
        <PasswordInput
          autoComplete="new-password"
          label="密码"
          placeholder="您的密码"
          required
          {...form.getInputProps('password')}
        />
        <Button type="submit" fullWidth loading={isPending}>
          登录
        </Button>
        <Center>
          <Text c="gray" ta="center">
            还未有账号？
          </Text>
          <Button
            variant="transparent"
            size="compact-md"
            onClick={() => {
              modals.closeAll()
              openRegisterModal()
            }}>
            免费注册
          </Button>
        </Center>
      </Stack>
    </form>
  )
}

export default LoginForm
