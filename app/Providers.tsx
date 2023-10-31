'use client'

import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import queryClient from '@/app/configs/queryClient'
import mantineTheme from '@/app/configs/mantineTheme'
import '@/app/configs/dayjsConfig'

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>
        <Notifications position="top-center" />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default Providers
