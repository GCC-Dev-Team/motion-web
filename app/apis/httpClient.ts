import ky from 'ky'
import env from '@/app/shared/env'
import notify from '@/app/shared/notify'
import useAuthStore from '@/app/@auth/stores/useAuthStore'

interface APIResponse {
  code: number
  msg: string
  data: unknown
}

const httpClient = ky.create({
  prefixUrl: env.BASE_API_PATH,
  retry: 0,
  hooks: {
    beforeRequest: [
      request => {
        const authState = useAuthStore.getState()

        if (authState.token) {
          request.headers.set('Authorization', authState.token)
        }
      }
    ],
    afterResponse: [
      async (_request, _options, response) => {
        const json: APIResponse = await response.json()

        if (json.code !== 200) {
          const error = new Error(json.msg)
          error.name = response.status.toString()

          notify.error({ message: json.msg })

          throw error
        }

        const body = JSON.stringify(json.data)

        return new Response(body, response)
      }
    ]
  }
})

export default httpClient
