import Link from 'next/link'
import { AppShellHeader, Title } from '@mantine/core'
import titleFont from '@/app/shared/titleFont'

const AppHeader = () => {
  return (
    <AppShellHeader py="xs" className="[--mantine-color-body:transparent]">
      <Link href="/">
        <Title style={titleFont.style}>Motion</Title>
      </Link>
    </AppShellHeader>
  )
}

export default AppHeader
