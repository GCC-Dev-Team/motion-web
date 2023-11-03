import { useForm, zodResolver } from '@mantine/form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import notify from '@/app/shared/notify'
import videoAPI from '@/app/apis/videoAPI'

const videoCommentFormSchema = z.object({
  content: z.string().min(1, {
    message: '请输入评论'
  })
})

interface UseVideoCommentFormOptions {
  videoId: string
}

type VideoCommentFormValues = z.infer<typeof videoCommentFormSchema>

const useVideoCommentForm = ({ videoId }: UseVideoCommentFormOptions) => {
  const form = useForm<VideoCommentFormValues>({
    validate: zodResolver(videoCommentFormSchema),
    initialValues: {
      content: ''
    }
  })

  const queryClient = useQueryClient()

  const { isPending, mutate: postVideo } = useMutation({
    ...videoAPI.postVideoComment(videoId),
    onSuccess() {
      notify.success({ message: '评论发布成功' })
      form.reset()

      queryClient.invalidateQueries(videoAPI.getVideoDetail(videoId))
      queryClient.invalidateQueries(videoAPI.getVideoCommentList(videoId))
    }
  })

  const handleSubmit = form.onSubmit(values => {
    postVideo(values)
  })

  return { form, isPending, handleSubmit }
}

export default useVideoCommentForm
