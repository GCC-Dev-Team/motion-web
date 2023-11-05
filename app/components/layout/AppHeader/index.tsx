import Link from 'next/link'
import { AppShellHeader, SimpleGrid, Title } from '@mantine/core'
import titleFont from '@/app/shared/titleFont'
import SearchVideoForm from '@/app/components/video/SearchVideoForm'
import UserInfo from '@/app/components/user/UserInfo'

const AppHeader = () => {
  return (
    <AppShellHeader py="xs" className="[--mantine-color-body:transparent]">
      <SimpleGrid className="h-full items-center" cols={3}>
        <Link href="/">
          <Title style={titleFont.style}>Motion</Title>
        </Link>
        <SearchVideoForm />
        <UserInfo />
      </SimpleGrid>
    </AppShellHeader>
  )
}

export default AppHeader
