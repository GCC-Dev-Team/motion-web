import Link from 'next/link'
import { AppShellHeader, Title } from '@mantine/core'

const AppHeader = () => {
  return (
    <AppShellHeader py="xs">
      <Link href="/">
        <Title order={2} c="yellow">
          Motion
        </Title>
      </Link>
    </AppShellHeader>
  )
}

export default AppHeader
