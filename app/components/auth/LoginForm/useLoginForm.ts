import { useForm, zodResolver } from '@mantine/form'
import { modals } from '@mantine/modals'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import accountAPI from '@/app/apis/accountAPI'
import regex from '@/app/shared/regex'
import useAuthStore from '@/app/stores/useAuthStore'

const loginFormSchema = z.object({
  email: z.string().email({ message: '请输入有效的邮箱地址' }),
  password: z.string().regex(regex.password, {
    message: '密码长度须在9到16个字符之间，且包含字母和数字'
  })
})

type LoginFormValues = z.infer<typeof loginFormSchema>

const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    validate: zodResolver(loginFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: ''
    }
  })

  const { isPending, mutate: login } = useMutation({
    ...accountAPI.login(),
    onSuccess: data => {
      useAuthStore.setState({ token: data.token })

      modals.closeAll()
    }
  })

  const handleSubmit = form.onSubmit(values => {
    login(values)
  })

  return {
    form,
    isPending,
    handleSubmit
  }
}

export default useLoginForm
