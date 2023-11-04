'use client'

import { TextInput, ActionIcon } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconSearch } from '@tabler/icons-react'
import { useQueryState } from 'next-usequerystate'

const SearchVideoForm = () => {
  const [, setSearch] = useQueryState('search')

  const form = useForm({
    initialValues: { search: '' }
  })

  const handleSubmit = form.onSubmit(values => {
    setSearch(values.search)
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="search"
        placeholder="找到你喜欢的视频..."
        {...form.getInputProps('search')}
        rightSection={
          <ActionIcon type="submit" radius="xl" variant="subtle">
            <IconSearch className="h-4 w-4" />
          </ActionIcon>
        }
      />
    </form>
  )
}

export default SearchVideoForm
