import { useRouter } from 'next/navigation'
import { useForm, zodResolver } from '@mantine/form'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import accountAPI from '@/app/apis/accountAPI'
import regex from '@/app/shared/regex'
import notify from '@/app/shared/notify'

const registerFormSchema = z.object({
  userName: z.string().regex(regex.userName, {
    message: '用户名长度须在1到8个字符之间，只能包含字母和数字'
  }),
  email: z.string().email({ message: '请输入有效的邮箱地址' }),
  password: z.string().regex(regex.password, {
    message: '密码长度须在9到16个字符之间，且包含字母和数字'
  })
})

type RegisterFormValues = z.infer<typeof registerFormSchema>

const useRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    validate: zodResolver(registerFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      userName: '',
      email: '',
      password: ''
    }
  })

  const router = useRouter()

  const { isPending, mutate: register } = useMutation({
    ...accountAPI.register(),
    onSuccess: () => {
      notify.success({ message: '注册成功' })

      router.replace('/login')
    }
  })

  const handleSubmit = form.onSubmit(values => {
    register(values)
  })

  return {
    form,
    isPending,
    handleSubmit
  }
}

export default useRegisterForm
