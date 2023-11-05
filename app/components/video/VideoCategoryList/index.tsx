import { ScrollArea, Group, Button } from '@mantine/core'
import { useQueryState } from 'next-usequerystate'
import { useSuspenseQuery } from '@tanstack/react-query'
import videoAPI from '@/app/apis/videoAPI'

const VideoCategoryList = () => {
  const { data: categories } = useSuspenseQuery(videoAPI.getVideoCategoryList())

  const [categoryId, setCategoryId] = useQueryState('category')

  return (
    <ScrollArea>
      <Group>
        {categories.map(category => (
          <Button
            key={category.categoryId}
            variant={categoryId === category.categoryId ? 'filled' : 'light'}
            onClick={() => setCategoryId(category.categoryId)}>
            {category.categoryName}
          </Button>
        ))}
      </Group>
    </ScrollArea>
  )
}

export default VideoCategoryList
