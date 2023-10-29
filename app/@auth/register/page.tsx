'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Modal,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Anchor
} from '@mantine/core'
import useRegisterForm from './useRegisterForm'

const RegisterModal = () => {
  const router = useRouter()

  const { form, handleSubmit, isPending } = useRegisterForm()

  return (
    <Modal title="创建新账户" opened onClose={() => router.back()}>
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
          <Text c="gray" ta="center">
            已拥有账号？
            <Anchor component={Link} href="/login">
              登录
            </Anchor>
          </Text>
        </Stack>
      </form>
    </Modal>
  )
}

export default RegisterModal
