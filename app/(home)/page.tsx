import Link from 'next/link'
import { Group } from '@mantine/core'

const HomePage = () => {
  return (
    <Group>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </Group>
  )
}

export default HomePage
