'use client'

import { type PropsWithChildren } from 'react'
import { AppShell } from '@mantine/core'

const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AppShell>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default AppLayout
