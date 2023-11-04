import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import {
  ColorSchemeScript,
  AppShell,
  AppShellMain,
  Box,
  Container
} from '@mantine/core'
import Providers from '@/app/Providers'
import AppHeader from '@/app/components/layout/AppHeader'

import './globals.css'

export const metadata: Metadata = {
  title: 'Motion',
  description: '短视频 App'
}

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Box className="bg-slate-50">
            <Container size="xl">
              <AppShell header={{ height: 72 }} withBorder={false} padding="md">
                <AppHeader />
                <AppShellMain className="h-[100dvh] pb-0">
                  {children}
                </AppShellMain>
              </AppShell>
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
