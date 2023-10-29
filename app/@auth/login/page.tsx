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
import titleFont from '@/app/shared/titleFont'
import useLoginForm from './useLoginForm'

const LoginModal = () => {
  const router = useRouter()

  const { form, handleSubmit, isPending } = useLoginForm()

  return (
    <Modal
      title={
        <>
          欢迎使用{' '}
          <Text inherit span className={titleFont.className}>
            Motion
          </Text>
        </>
      }
      opened
      onClose={() => router.back()}>
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
          <Text c="gray" ta="center">
            还未有账号？
            <Anchor component={Link} href="/register">
              免费注册
            </Anchor>
          </Text>
        </Stack>
      </form>
    </Modal>
  )
}

export default LoginModal
