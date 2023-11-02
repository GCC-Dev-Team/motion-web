'use client'

import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Center
} from '@mantine/core'
import { modals } from '@mantine/modals'
import useRegisterForm from './useRegisterForm'
import openLoginModal from '../LoginForm/openLoginModal'

const RegisterForm = () => {
  const { form, handleSubmit, isPending } = useRegisterForm()

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          autoComplete="username"
          label="用户名"
          placeholder="您的用户名"
          required
          {...form.getInputProps('userName')}
        />
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
          注册
        </Button>
        <Center>
          <Text c="gray" ta="center">
            已拥有账号？
          </Text>
          <Button
            variant="transparent"
            size="compact-md"
            onClick={() => {
              modals.closeAll()
              openLoginModal()
            }}>
            登录
          </Button>
        </Center>
      </Stack>
    </form>
  )
}

export default RegisterForm
