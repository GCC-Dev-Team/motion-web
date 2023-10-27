'use client'

import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'
import queryClient from '@/app/configs/queryClient'
import mantineTheme from '@/app/configs/mantineTheme'

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
    </QueryClientProvider>
  )
}

export default Providers
