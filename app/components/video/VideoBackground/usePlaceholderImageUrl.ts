import { useQuery } from '@tanstack/react-query'
import loadImage from 'image-promise'
import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash'

interface UsePlaceholderImageUrlOptions {
  imageUrl: string
  size: number
}

const usePlaceholderImageUrl = ({
  imageUrl,
  size
}: UsePlaceholderImageUrlOptions) => {
  const { data } = useQuery({
    queryKey: [imageUrl],
    queryFn: () => loadImage(imageUrl, { crossOrigin: 'anonymous' }),
    enabled: typeof window !== 'undefined',
    select: image => {
      const scale = Math.min(size / image.width, size / image.height)
      const width = Math.floor(image.width * scale)
      const height = Math.floor(image.height * scale)

      const canvas = new OffscreenCanvas(width, height)
      const context = canvas.getContext('2d')!

      context.drawImage(image, 0, 0, width, height)

      const pixels = context.getImageData(0, 0, width, height)
      const hash = rgbaToThumbHash(width, height, pixels.data)

      const dataUrl = thumbHashToDataURL(hash)

      return dataUrl
    }
  })

  return (
    data ||
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"/>'
  )
}

export default usePlaceholderImageUrl
