import { type PropsWithChildren } from 'react'
import { AppShell, AppShellMain, Box, Container } from '@mantine/core'
import AppHeader from './components/AppHeader'
import AppNavbar from './components/AppNavbar'

const HomePageLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box className="bg-slate-50">
      <Container size="xl">
        <AppShell
          header={{ height: 64 }}
          navbar={{ width: 200, breakpoint: 0 }}
          withBorder={false}
          padding="md">
          <AppHeader />
          <AppNavbar />
          <AppShellMain className="h-[100dvh] pb-0">{children}</AppShellMain>
        </AppShell>
      </Container>
    </Box>
  )
}

export default HomePageLayout
