import { modals } from '@mantine/modals'
import RegisterForm from '.'

const openRegisterModal = () => {
  modals.open({
    title: '创建新账户',
    children: <RegisterForm />
  })
}

export default openRegisterModal
