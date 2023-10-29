import { type PropsWithChildren } from 'react'
import { AppShell, AppShellMain, Container } from '@mantine/core'
import AppHeader from './components/AppHeader'
import AppNavbar from './components/AppNavbar'

const HomePageLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Container size="xl">
      <AppShell
        header={{ height: 64 }}
        navbar={{ width: 200, breakpoint: 0 }}
        padding="md">
        <AppHeader />
        <AppNavbar />
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </Container>
  )
}

export default HomePageLayout
