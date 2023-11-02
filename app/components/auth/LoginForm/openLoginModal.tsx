import { Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import titleFont from '@/app/shared/titleFont'
import LoginForm from '.'

const openLoginModal = () => {
  modals.open({
    title: (
      <>
        欢迎使用{' '}
        <Text inherit span className={titleFont.className}>
          Motion
        </Text>
      </>
    ),
    children: <LoginForm />
  })
}

export default openLoginModal
