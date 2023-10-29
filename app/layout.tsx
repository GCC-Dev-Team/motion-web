import { type PropsWithChildren, type ReactNode } from 'react'
import { type Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import Providers from '@/app/Providers'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Motion',
  description: '短视频 App'
}

interface RootLayoutProps {
  auth: ReactNode
}

const RootLayout = ({ children, auth }: PropsWithChildren<RootLayoutProps>) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          {auth}
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
