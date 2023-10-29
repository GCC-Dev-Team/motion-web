import { PropsWithChildren } from 'react'
import { AppShell, AppShellMain } from '@mantine/core'

const HomePageLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AppShell>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}

export default HomePageLayout
